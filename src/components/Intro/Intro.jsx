import "./Intro.css"
import pack1 from "../../assets/images/PACK_1.png"

export const Intro = () => {

  return (
    <div className="global-intro">
      <div className="bloc1-intro">
        <div className="bloc1A-intro">
          <span id="title-intro">The Packing Hroject NFT Collection</span>
          <span id="text-intro">That's the fucking NFT collection, please Mint & buy all you can put ! lopsus item panawe canim anubis dela feta salakis obonléde brebis as a little text before the mint button in da mother focker in master class.</span>
          <button className="mint_button">Mint Now &nbsp; &#62;</button>
        </div>
        <div className="bloc1B-intro">
          <img id="pack1" alt="pack1_NFT" src={pack1} />
        </div> 
      </div>
      <div className="bloc2-intro">
        <div className="stat_box">
          <h2>50</h2><p>Total Items</p>
        </div>
        <div className="stat_box">
          <h2>48</h2><p>Total Owners</p>
        </div>
        <div className="stat_box">
          <h2>0.25</h2><p>Floor Price (ETH)</p>
        </div>
        <div className="stat_box">
          <h2>12K</h2><p>Volume Traded</p>
        </div>
      </div>
    </div>
  )
}