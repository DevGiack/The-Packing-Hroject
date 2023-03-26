import { useEffect, useState } from "react"
import { v1 as uuidv1 } from "uuid"
import { getAlchemy } from "../../utils/utils.js"
import { Link } from "react-router-dom"
import "./OwnCollection.css"

export const OwnCollection = () => {

    const alchemy = getAlchemy()
    let NFTTitle = ""
    let imageUrl = ""
    let tokenId = ""

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

    return (
        <>
            <div id="OwnCollection">
                <div className="bloc-title">
                    <span id="big-title">MY PROFILE</span>
                    <span id="little-title">My NFT's</span>
                    <span id="title-border"></span>
                </div>
                <div className="bloc-cards">
                    {nftsForOwner
                        .filter((obj) => obj.contract.address === import.meta.env.VITE_CONTRACT_ADRESS.toLowerCase())
                        .map((x) => {
                            x.tokenId ? tokenId = x.tokenId : tokenId = "undefined"
                            x.title ? NFTTitle = x.title : NFTTitle = "undefined"
                            x.media[0].gateway ? imageUrl = x.media[0].gateway : imageUrl = "undefined"
                            const id = uuidv1();

                            return (
                                <div key={id} className="card">
                                    <div className="card-body">
                                        <span className="card-id">
                                            # {tokenId}
                                        </span>
                                        <img
                                            src={imageUrl}
                                            className="card-img"
                                            alt="NFT TPH"
                                        ></img>
                                        <span>{NFTTitle}</span>
                                        <span>
                                            <b>member {tokenId}/50</b>
                                        </span>
                                        <div className="card-button-link">
                                            <Link to={`/details/${tokenId}`}>
                                                <button id="details_button">
                                                    Details
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
        </>
    )
}