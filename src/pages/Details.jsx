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
    
    attributValues.map((x) => {
        // REPRENDRE ICI
    })

    const currentGenre = currentNFT?.rawMetadata?.attributes[0]?.value;
    const currentLanguage = currentNFT?.rawMetadata?.attributes[1]?.value;
    const currentExpression = currentNFT?.rawMetadata?.attributes[2]?.value;
    const currentGlasses = currentNFT?.rawMetadata?.attributes[3]?.value;
    const currentLisereTPH = currentNFT?.rawMetadata?.attributes[4]?.value;
    const currentSticker = currentNFT?.rawMetadata?.attributes[5]?.value;
    const currentArticle = currentNFT?.rawMetadata?.attributes[6]?.value;
    const currentBackground = currentNFT?.rawMetadata?.attributes[7]?.value;
    const currentComputer = currentNFT?.rawMetadata?.attributes[8]?.value;

    const percentGenre = statistiques[0][currentGenre];
    const percentLanguage = statistiques[1][currentLanguage];
    const percentExpression = statistiques[2][currentExpression];
    const percentGlasses = statistiques[3][currentGlasses];
    const percentLisereTPH = statistiques[4][currentLisereTPH];
    const percentSticker = statistiques[5][currentSticker];
    const percentArticle = statistiques[6][currentArticle];
    const percentBackground = statistiques[7][currentBackground];
    const percentComputer = statistiques[8][currentComputer];

    const colorGenre = getTraitColor(percentGenre);
    const colorLanguage = getTraitColor(percentLanguage);
    const colorExpression = getTraitColor(percentExpression);
    const colorGlasses = getTraitColor(percentGlasses);
    const colorLisereTPH = getTraitColor(percentLisereTPH);
    const colorSticker = getTraitColor(percentSticker);
    const colorArticle = getTraitColor(percentArticle);
    const colorBackground = getTraitColor(percentBackground);
    const colorComputer = getTraitColor(percentComputer);

    const colorValue = [{"orange":"LEGENDARY"},{"purple":"EPIC"},{"blue":"RARE"},{"green":"UNUSUAL"},{"gray":"COMMON"}];

    const valueGenre = colorValue.find(color => color[colorGenre])?.[colorGenre];
    const valueLanguage = colorValue.find(color => color[colorLanguage])?.[colorLanguage];
    const valueExpression = colorValue.find(color => color[colorExpression])?.[colorExpression];
    const valueGlasses = colorValue.find(color => color[colorGlasses])?.[colorGlasses];
    const valueLisereTPH = colorValue.find(color => color[colorLisereTPH])?.[colorLisereTPH];
    const valueSticker = colorValue.find(color => color[colorSticker])?.[colorSticker];
    const valueArticle = colorValue.find(color => color[colorArticle])?.[colorArticle];
    const valueBackground = colorValue.find(color => color[colorBackground])?.[colorBackground];
    const valueComputer = colorValue.find(color => color[colorComputer])?.[colorComputer];

    const attrib = ["GENRE : ","LANGUAGE : ","EXPRESSION : ","GLASSES : ","LISERE TPH : ",
                    "STICKER : ","ARTICLE : ","BG COLOR : ","COMPUTER : "];

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
                    <span className="attrib">{attrib[0]}
                        <span className="values"> {currentGenre} </span>
                        <span className={colorGenre}> {percentGenre}% 
                        <span className="valNFT"> ( {valueGenre} )
                    </span></span></span>
                    <span className="attrib">{attrib[1]} 
                        <span className="values"> {currentLanguage} </span>
                        <span className={colorLanguage}> {percentLanguage}% 
                        <span className="valNFT"> ( {valueLanguage} )
                    </span></span></span>
                    <span className="attrib">{attrib[2]}
                        <span className="values"> {currentExpression} </span>
                        <span className={colorExpression}> {percentExpression}% 
                        <span className="valNFT"> ( {valueExpression} )
                    </span></span></span>
                    <span className="attrib">{attrib[3]}
                        <span className="values"> {currentGlasses} </span>
                        <span className={colorGlasses}> {percentGlasses}% 
                        <span className="valNFT"> ( {valueGlasses} )
                    </span></span></span>
                    <span className="attrib">{attrib[4]}
                        <span className="values"> {currentLisereTPH} </span>
                        <span className={colorLisereTPH}> {percentLisereTPH}% 
                        <span className="valNFT"> ( {valueLisereTPH} )
                    </span></span></span>
                    <span className="attrib">{attrib[5]}
                        <span className="values"> {currentSticker} </span>
                        <span className={colorSticker}> {percentSticker}% 
                        <span className="valNFT"> ( {valueSticker} )
                    </span></span></span>
                    <span className="attrib">{attrib[6]}
                        <span className="values"> {currentArticle} </span>
                        <span className={colorArticle}> {percentArticle}% 
                        <span className="valNFT"> ( {valueArticle} )
                    </span></span></span>
                    <span className="attrib">{attrib[7]}
                        <span className="values"> {currentBackground} </span>
                        <span className={colorBackground}> {percentBackground}% 
                        <span className="valNFT"> ( {valueBackground} )
                    </span></span></span>
                    <span className="attrib">{attrib[8]}
                        <span className="values"> {currentComputer} </span>
                        <span className={colorComputer}> {percentComputer}% 
                        <span className="valNFT"> ( {valueComputer} )
                    </span></span></span>
                </div>
            </div>
            )}
            <div className="back-profil">
                <Link to="/profil"> &lt; Back</Link>
            </div>
        </div>
    );
}
