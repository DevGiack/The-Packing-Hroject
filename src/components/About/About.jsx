import "./About.css"
import about from "../../assets/images/PACK_2.png"


export const About = () => {

  return (
    <>
      <div className="bloc-title">
        <span id="big-title">ABOUT US</span>
        <span id="little-title">Our Story</span>
        <span id="title-border"></span>
      </div>
      <div className="global-about">
        <div className="bloc-about">
          <div className="blocA-about">
            <img src={about} alt="pack2_NFT" />
          </div>
          <div className="blocB-about">
            <span id="title-about">Welcome to The Packing Hroject Art Studio</span>
            <span id="text1">The Packing Hroject Art Studio is a private collection of NFT's unique digital collectibles. These images are the products of hard work and the fruit of an overflowing imagination.</span>
            <span id="text2">The tedious production of these works of art is the result of hundreds of hours of artistic work. We hope you like this particular collection and make you want to participate in its success.</span>
            <button className="discord_button">Join Our Discord &nbsp; &#62;</button>
          </div> 
        </div>
      </div>
    </>
  )
}