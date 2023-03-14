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
            <span id="text1">The Packing Hroject Art Studio is a private collection of NFT's unique digital collectibles. Lorem ipsum is simply dummy text of the printing and typesetting industry.</span>
            <span id="text2">Lorem lipusus poil à l'anus is an over text pour meubler. Ce site est une bombe atomique, ça va envoyer du lourd au passage devant les jury qui vont en prendre des leçons.</span>
            <button className="discord_button">Join Our Discord &nbsp; &#62;</button>
          </div> 
        </div>
      </div>
    </>
  )
}