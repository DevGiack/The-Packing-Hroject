import SliderNFT from "../SliderNFT/SliderNFT"
import "./Show.css"

export const Show = () => {

  return (
    <>
      <div className="bloc-title">
        <span id="big-title">SHOWCASE</span>
        <span id="little-title">Our Collections</span>
        <span id="title-border"></span>
      </div>
      <SliderNFT/>
    </>
  )
}