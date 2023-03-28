import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"
import { getTraitColor } from "../utils/utils";
// import { Alchemy } from "alchemy-sdk"
import { stats } from "../utils/stats"; 
import { getAlchemy } from "../utils/utils.js"
import { Link } from "react-router-dom";
import DELOREAN from "../assets/images/404/Delorean.webp"
import BACKTO from "../assets/images/404/backToTheHomepage.webp"
import "./Details.css"

let lecture = 0;

export const Details = () => {

    lecture += 1;
    let display = true;
    const navigate = useNavigate();
    const { TokenId } = useParams();

    if (TokenId > 50) {
        navigate("/*");
    }

    // const network = {
    //     80001: "polygon-mumbai",
    //     137: "polygon-mainnet",
    //     1: "eth-mainnet",
    // }

    // const settings = {
    //     apiKey: import.meta.env.VITE_ALCHEMY_API_KEY,
    //     network: network["80001"],
    // }
    // const alchemy = new Alchemy(settings)

    const alchemy = getAlchemy()
    
    const [nftsForOwner, setNftsForOwner] = useState([])

    useEffect(() => {
        async function fetchNfts() {
            if (window.ethereum && window.ethereum.selectedAddress) {
                const ownerAddress = window.ethereum.selectedAddress;
                const nfts = await alchemy.nft.getNftsForOwner(ownerAddress);
                setNftsForOwner(nfts.ownedNfts);
            }
        }
        fetchNfts()
    }, [])

    // const currentNFT = nftsForOwner.find(nft => nft.tokenId === TokenId)
    const currentNFT = nftsForOwner.find(nft => nft.tokenId === TokenId && nft.contract.address === import.meta.env.VITE_CONTRACT_ADRESS.toLowerCase())

    if ((lecture > 5) && (currentNFT == undefined)) { display = false }
    if (currentNFT) { lecture = 0 }

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
            {currentNFT && (
            <>
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
                <div className="back-to-profil">
                    <Link to="/profil"> &lt; Back</Link>
                </div>
            </>
            )}
            { !display && (
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
                <div className="back-to-profil">
                    <Link to="/"> &lt; Back</Link>
                </div>
            </>
            )}
        </div>
    );
}
