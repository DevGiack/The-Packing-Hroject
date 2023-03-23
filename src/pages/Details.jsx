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
    
    const infosValues = attributValues.map((x) => currentNFT?.rawMetadata?.attributes[x]?.value);

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
                    width="700px"
                    height="700px"
                    alt="NFT TPH"
                />
                <div className="metadata_details">
                    <span className="attrib">ID : 
                        <span className="values"> #{TokenId}
                    </span></span>
                    { attributValues.map((i) => {
                        return (
                            <span className="attrib">{attributValues[i]}
                            <span className="values"> {infosValues[i]} </span>
                            <span className={infosColors[i]}> {infosPercents[i]}% 
                            <span className="valNFT"> &lpar; {infosGraduation[i]} &rpar;
                            </span></span></span>
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
