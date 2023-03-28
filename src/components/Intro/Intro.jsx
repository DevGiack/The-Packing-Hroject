import pack1 from "../../assets/images/PACK_1.webp"
import { Link } from "react-router-dom"
import { MintButton } from "../MintButton/MintButton"
import { getCollection, getAlchemy } from "../../utils/utils.js"
import { useState, useEffect } from "react"
import "./Intro.css"

let floor_price = 8;
try {
    floor_price = await alchemy.nft.getFloorPrice(import.meta.env.VITE_CONTRACT_ADRESS)
  } catch (error) {
}

export const Intro = () => {

    const alchemy = getAlchemy();
    const [list, setList] = useState([]);
    const [owners, setOwners] = useState({ owners: [] });
    const [count, setCount] = useState(0);
    const [minted, setMinted] = useState();
    const [ownersCount, setOwnersCount] = useState();

    useEffect(() => {
        const interval = setInterval( async () => {
        const newList = await getCollection();
        const newOwners = await alchemy.nft.getOwnersForContract(import.meta.env.VITE_CONTRACT_ADRESS);
        setList(newList);
        setOwners(newOwners);
        setCount(count + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, [count]);

    useEffect(() => {
        const updatedMinted = list.length;
        const updatedOwnersCount = new Set(owners.owners).size -1;
        setMinted(updatedMinted);
        setOwnersCount(updatedOwnersCount);
    }, [list, owners]);

    if (ownersCount < 0) {setOwnersCount(0)} 

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
                    <img id="pack1" alt="pack1_NFT" src={pack1} height="100%" width="100%" />
                </div>
            </div>
            <div className="bloc2-intro">
                <div className="boxs">
                    <div className="stat-box">
                        <span className="box-val">50</span>
                        <span className="box-text">Total Items</span>
                    </div>
                    <div className="stat-box">
                        <span className="box-val">{minted}</span>
                        <span className="box-text">Total Minted</span>
                    </div>
                </div>
                <div className="boxs">
                    <div className="stat-box">
                        <span className="box-val">{ownersCount}</span>
                        <span className="box-text">Unique Owners</span>
                    </div>
                    <div className="stat-box">
                        <span className="box-val">{floor_price} MATIC</span>
                        <span className="box-text">Floor Price</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
