import "./Intro.css"
import pack1 from "../../assets/images/PACK_1.webp"
import { Link } from "react-router-dom"
import { MintButton } from "../MintButton/MintButton"

export const Intro = () => {
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
                <div className="stat_box">
                    <h2>50</h2>
                    <p>Total Items</p>
                </div>
                <div className="stat_box">
                    <h2>48</h2>
                    <p>Total Owners</p>
                </div>
                <div className="stat_box">
                    <h2>0.25</h2>
                    <p>Floor Price (ETH)</p>
                </div>
                <div className="stat_box">
                    <h2>12K</h2>
                    <p>Volume Traded</p>
                </div>
            </div>
        </div>
    )
}
