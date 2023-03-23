import { useEffect, useState } from "react"
import { Alchemy } from "alchemy-sdk"
import { useParams } from "react-router-dom";
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
    const currentGenre = currentNFT?.rawMetadata?.attributes[0]?.value;
    const currentLanguage = currentNFT?.rawMetadata?.attributes[1]?.value;
    const currentExpression = currentNFT?.rawMetadata?.attributes[2]?.value;
    const currentGlasses = currentNFT?.rawMetadata?.attributes[3]?.value;
    const currentLisereTPH = currentNFT?.rawMetadata?.attributes[4]?.value;
    const currentSticker = currentNFT?.rawMetadata?.attributes[5]?.value;
    const currentArticle = currentNFT?.rawMetadata?.attributes[6]?.value;
    const currentBackground = currentNFT?.rawMetadata?.attributes[7]?.value;
    const currentComputer = currentNFT?.rawMetadata?.attributes[8]?.value;
    return (
    <>
        {currentImgUrl && (
        <div className="img_details">
            <div>
            <img
                src={currentImgUrl}
                width="700px"
                height="700px"
                alt="NFT TPH"
            />
            </div>
            <div className="metadata_details">
                <span className="attrib">ID : <span className="values"> #{TokenId}</span></span><br />
                <span className="attrib">GENRE : <span className="values"> {currentGenre}</span></span><br />
                <span className="attrib">LANGUAGE : <span className="values"> {currentLanguage}</span></span><br />
                <span className="attrib">EXPRESSION : <span className="values"> {currentExpression}</span></span><br />
                <span className="attrib">GLASSES : <span className="values"> {currentGlasses}</span></span><br />
                <span className="attrib">LISERE TPH : <span className="values"> {currentLisereTPH}</span></span><br />
                <span className="attrib">STICKER : <span className="values"> {currentSticker}</span></span><br />
                <span className="attrib">ARTICLE : <span className="values"> {currentArticle}</span></span><br />
                <span className="attrib">BG COLOR : <span className="values"> {currentBackground}</span></span><br />
                <span className="attrib">COMPUTER : <span className="values"> {currentComputer}</span></span>
            </div>
        </div>
        )}
    </>
    );
}
