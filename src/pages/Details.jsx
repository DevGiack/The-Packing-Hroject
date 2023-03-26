import { useEffect, useState } from "react"
import { getTraitColor } from "../utils/utils";
import { useParams } from "react-router-dom";
import { Alchemy } from "alchemy-sdk"
import { stats } from "../utils/stats"; 
import { Link } from "react-router-dom";
import DELOREAN from "../assets/images/404/Delorean.webp"
import BACKTO from "../assets/images/404/backToTheHomepage.webp"
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

    const attributValues = ["GENRE : ","LANGUAGE : ","EXPRESSION : ","GLASSES : ","BORDER : ",
    "STICKER : ","ARTICLE : ","BACKGROUND : ","COMPUTER : "];

    const infosValues = attributValues.map((obj, i) => currentNFT?.rawMetadata?.attributes[i]?.value);
    const infosPercents = infosValues.map((obj, i) => stats[i][obj]);
    const infosColors = infosPercents.map((x) => getTraitColor(x));
    
    const colorsGraduation = [{"orange":"LEGENDARY"},{"purple":"EPIC"},{"blue":"RARE"},{"green":"UNUSUAL"},{"gray":"COMMON"}];
    const infosGraduation = infosColors.map((x) => colorsGraduation.find(color => color[x])?.[x] );

    return ( 
        <div className="global-details">
            {currentImgUrl ? (
                <div className="img_details">
                    <div className="img-content">
                    <img
                        src={currentImgUrl}
                        width="100%"
                        height="100%"
                        alt="NFT TPH"
                    />
                    </div>
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
            ) : (
            <>
                <div className="error-access">
                    <span className="error">ERROR :</span>
                    <span className="permissions">YOU MUST HAVE PERMISSIONS TO VIEW THIS NFT</span>
                </div>
                <div className="img-error">
                    <img
                        src={BACKTO}
                        width="65%"
                        height="65%"
                        alt="Back to the Homepage"
                    />
                    <img
                        src={DELOREAN}
                        width="65%"
                        height="65%"
                        alt="El Delorean, El Doc y Marti McFly"
                    />
                </div>
            </>
            )}
            <div className="back-to-profil">
                { currentImgUrl ? (
                    <Link to="/profil"> &lt; Back</Link>
                ) : (
                    <Link to="/"> &lt; Back</Link>
                )}
            </div>
        </div>
    );
}
