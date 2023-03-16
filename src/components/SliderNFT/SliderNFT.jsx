import "./SliderNFT.css";
import { imagesList } from "../../assets/images/mini_collection/images_list";

export const SliderNFT =() => {

  let slideA = [];
  let slideB = [];

  for (let i = 1; i < 32; i++) {
    slideA.push(
      <div className="slide-A">
        <img src={imagesList[i]} height="250" width="250" alt={`mini_${i}`} />
      </div>
    );
  }

  for (let i = 31; i < 51; i++) {
    slideB.push(
      <div className="slide-B">
        <img src={imagesList[i]} height="250" width="250" alt={`mini_${i}`} />
      </div>
    );
  }
  
  for (let i = 1; i < 7; i++) {
      slideB.push(
        <div className="slide-B">
          <img src={imagesList[i]} height="250" width="250" alt={`mini_${i}`} />
        </div>
      );
    }

  slideB = slideB.reverse();

  return (
    <>
      <div className="slider-A">
        <div className="slide-track-A">
          {slideA}
        </div>
      </div>

      <div className="slider-B">
        <div className="slide-track-B">
          {slideB}
        </div>
      </div>
    </>
  )
}