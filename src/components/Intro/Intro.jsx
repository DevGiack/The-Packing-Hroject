import pack1 from "../../assets/images/PACK_1.webp"
import { Link } from "react-router-dom"
import { MintButton } from "../MintButton/MintButton"
import { getCollection, getAlchemy } from "../../utils/utils.js"
import "./Intro.css"

const list = await getCollection()
const alchemy = getAlchemy();
const owners = await alchemy.nft.getOwnersForContract("0x5561c71E298DFE9fEd388e7e57042156Bb6C348F")
const floor_price = 8

try {
    floor_price = await alchemy.nft.getFloorPrice("0x5561c71E298DFE9fEd388e7e57042156Bb6C348F")
  } catch (error) {

  }

export const Intro = () => {

    const minted = list.length
    const owners_count = new Set(owners.owners).size;
    
    return (
        <div className="global-intro">
            <div className="bloc1-intro">
                <div className="bloc1A-intro">
                    <span id="title-intro">
                        The Packing Hroject NFT Collection
                    </span>
                    <span id="text-intro">
                        These NFTs were made with love, that's why we collect
                        all your attention about them. Any resemblance to
                        certain students of a certain school is obviously
                        fortuitous and the result of chance. This is an Amazing
                        NFT Collection, please... Mint & Buy all you can !!
                    </span>
                    <Link to="/mint">
                        <MintButton />
                    </Link>
                </div>
                <div className="bloc1B-intro">
                    <img id="pack1" alt="pack1_NFT" src={pack1} />
                </div>
            </div>
            <div className="bloc2-intro">
                <div className="stat-box">
                    <span className="box-val">50</span>
                    <span className="box-text">Total Items</span>
                </div>
                <div className="stat-box">
                    <span className="box-val">{minted}</span>
                    <span className="box-text">Total Minted</span>
                </div>
                <div className="stat-box">
                    <span className="box-val">{owners_count}</span>
                    <span className="box-text">Unique owners</span>
                </div>
                <div className="stat-box">
                    <span className="box-val">{floor_price} MATIC</span>
                    <span className="box-text">floor price</span>
                </div>
            </div>
        </div>
    )
}
