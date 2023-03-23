import { useEffect, useState } from "react"
import { Alchemy } from "alchemy-sdk"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { statistiques } from "../statistiques/statistiques"
import { getTraitColor } from "../utils/utils";
import "./Details.css"

export const Details = () => {

    const { TokenId } = useParams();

    const network = {
        80001: "polygon-mumbai",
        137: "polygon-mainnet",
        1: "eth-mainnet",
    }

    const settings = {
        apiKey: import.meta.env.VITE_ALCHEMY_API_KEY,
        network: network["80001"],
    }
    const alchemy = new Alchemy(settings)
    
    const [nftsForOwner, setNftsForOwner] = useState([])

    useEffect(() => {
        async function fetchNfts() {
            if (window.ethereum && window.ethereum.selectedAddress) {
                const ownerAddress = window.ethereum.selectedAddress
                const nfts = await alchemy.nft.getNftsForOwner(ownerAddress)
                setNftsForOwner(nfts.ownedNfts)
            }
        }
        fetchNfts()
    }, [])

    const currentNFT = nftsForOwner.find(nft => nft.tokenId === TokenId)
    const currentImgUrl = currentNFT?.media[0]?.gateway;

    const attributValues = ["GENRE : ","LANGUAGE : ","EXPRESSION : ","GLASSES : ","LISERE TPH : ",
    "STICKER : ","ARTICLE : ","BG COLOR : ","COMPUTER : "];

    const infosValues = attributValues.map((obj, i) => currentNFT?.rawMetadata?.attributes[i]?.value);
    const infosPercents = infosValues.map((obj, i) => statistiques[i][obj]);
    const infosColors = infosPercents.map((x) => getTraitColor(x));
    
    const colorsGraduation = [{"orange":"LEGENDARY"},{"purple":"EPIC"},{"blue":"RARE"},{"green":"UNUSUAL"},{"gray":"COMMON"}];
    const infosGraduation = infosColors.map((x) => colorsGraduation.find(color => color[x])?.[x] );

    return (
        <div className="global-details">
            {currentImgUrl && (
            <div className="img_details">
                <img
                    src={currentImgUrl}
                    width="650px"
                    height="650px"
                    alt="NFT TPH"
                />
                <div className="metadata_details">
                    <span className="NFT-ID">ID : <span className="value"> #{TokenId}</span></span>
                    { attributValues.map((obj, i) => {
                        return (
                            <div key={obj} className="line">
                                <span className="attrib">{attributValues[i]}</span>
                                <span className="value"> &nbsp; {infosValues[i]}</span>
                                <span className={infosColors[i]}> &nbsp; &nbsp; <i>{infosPercents[i]} %</i>
                                <span className="valNFT"> &nbsp; &nbsp;<i>{infosGraduation[i]}</i></span></span>
                            </div>
                        )
                    })}
                </div>
            </div>
            )}
            <div className="back-profil">
                <Link to="/profil"> &lt; Back</Link>
            </div>
        </div>
    );
}
