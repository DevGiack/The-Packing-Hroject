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
        apiKey: import.meta.env.VITE_MORALIS_API_KEY,
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

    return (
    <>
        {currentImgUrl && (
        <div className="img_details">
            <div>
            <img
                src={currentImgUrl}
                width="750px"
                height="750px"
                alt="NFT TPH"
            />
            </div>
            <div className="metadata_details">
                GENRE : MEN TYPE 2 LANGUAGE : HTML/CSS
                <br></br>
                EXPRESSION : N°3
                <br></br>
                GLASSES : NO GLASSES
                <br></br>
                LISERE TPH : CLASSIC
                <br></br>
                STICKER : STACK OVERFLOW
                <br></br>
                ARTICLE : POSTER
                <br></br>
                BACKGROUND COLOR : BROWN
                <br></br>
                COMPUTER : SILVER
            </div>
        </div>
        )}
    </>
    );




}
