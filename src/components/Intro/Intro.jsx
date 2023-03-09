import "./Intro.css"

export const Intro = () => {

return (
  <div className="global">
    <div className="part_1">
      <div className="part_1A">
        <h1>The Packing Hroject NFT Collection</h1>
        <p>That's the fucking NFT collection, please Mint & buy all you can put ! lopsus item panawe canim anubis dela feta salakis obonléde brebis as a little text before the mint button in da mother focker in master class.</p>
        <button className="mint_button">Mint Now &nbsp; &#62;</button>
      </div>
      <div className="part_1B">
        <img src="../src/assets/images/PACK_1.png" id="pack1" alt="pack1_NFT" />
      </div> 
    </div>
    <div className="part_2">
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