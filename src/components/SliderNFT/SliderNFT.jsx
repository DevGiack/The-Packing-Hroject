import NFT1 from "../../assets/images/mini_collection/TPH_01.jpg";
import NFT2 from "../../assets/images/mini_collection/TPH_02.jpg";
import NFT3 from "../../assets/images/mini_collection/TPH_03.jpg";
import NFT4 from "../../assets/images/mini_collection/TPH_04.jpg";
import NFT5 from "../../assets/images/mini_collection/TPH_05.jpg";
import NFT6 from "../../assets/images/mini_collection/TPH_06.jpg";
import NFT7 from "../../assets/images/mini_collection/TPH_07.jpg";
import NFT8 from "../../assets/images/mini_collection/TPH_08.jpg";
import NFT9 from "../../assets/images/mini_collection/TPH_09.jpg";
import NFT10 from "../../assets/images/mini_collection/TPH_010.jpg";
import NFT11 from "../../assets/images/mini_collection/TPH_011.jpg";
import NFT12 from "../../assets/images/mini_collection/TPH_012.jpg";
import NFT13 from "../../assets/images/mini_collection/TPH_013.jpg";
import NFT14 from "../../assets/images/mini_collection/TPH_014.jpg";
import NFT15 from "../../assets/images/mini_collection/TPH_015.jpg";
import NFT16 from "../../assets/images/mini_collection/TPH_016.jpg";
import NFT17 from "../../assets/images/mini_collection/TPH_017.jpg";
import NFT18 from "../../assets/images/mini_collection/TPH_018.jpg";
import NFT19 from "../../assets/images/mini_collection/TPH_019.jpg";
import NFT20 from "../../assets/images/mini_collection/TPH_020.jpg";
import NFT21 from "../../assets/images/mini_collection/TPH_021.jpg";
import NFT22 from "../../assets/images/mini_collection/TPH_022.jpg";
import NFT23 from "../../assets/images/mini_collection/TPH_023.jpg";
import NFT24 from "../../assets/images/mini_collection/TPH_024.jpg";
import NFT25 from "../../assets/images/mini_collection/TPH_025.jpg";
import NFT26 from "../../assets/images/mini_collection/TPH_026.jpg";
import NFT27 from "../../assets/images/mini_collection/TPH_027.jpg";
import NFT28 from "../../assets/images/mini_collection/TPH_028.jpg";
import NFT29 from "../../assets/images/mini_collection/TPH_029.jpg";
import NFT30 from "../../assets/images/mini_collection/TPH_030.jpg";
import NFT31 from "../../assets/images/mini_collection/TPH_031.jpg";
import NFT32 from "../../assets/images/mini_collection/TPH_032.jpg";
import NFT33 from "../../assets/images/mini_collection/TPH_033.jpg";
import NFT34 from "../../assets/images/mini_collection/TPH_034.jpg";
import NFT35 from "../../assets/images/mini_collection/TPH_035.jpg";
import NFT36 from "../../assets/images/mini_collection/TPH_036.jpg";
import NFT37 from "../../assets/images/mini_collection/TPH_037.jpg";
import NFT38 from "../../assets/images/mini_collection/TPH_038.jpg";
import NFT39 from "../../assets/images/mini_collection/TPH_039.jpg";
import NFT40 from "../../assets/images/mini_collection/TPH_040.jpg";
import NFT41 from "../../assets/images/mini_collection/TPH_041.jpg";
import NFT42 from "../../assets/images/mini_collection/TPH_042.jpg";
import NFT43 from "../../assets/images/mini_collection/TPH_043.jpg";
import NFT44 from "../../assets/images/mini_collection/TPH_044.jpg";
import NFT45 from "../../assets/images/mini_collection/TPH_045.jpg";
import NFT46 from "../../assets/images/mini_collection/TPH_046.jpg";
import NFT47 from "../../assets/images/mini_collection/TPH_047.jpg";
import NFT48 from "../../assets/images/mini_collection/TPH_048.jpg";
import NFT49 from "../../assets/images/mini_collection/TPH_049.jpg";
import NFT50 from "../../assets/images/mini_collection/TPH_050.jpg";

import "./SliderNFT.css";

export const SliderNFT =() => {

  const imgTab = (slide, nameClass, start, end) => {
    for (let i = start; i <= end; i++) {
      slide.push(
        <div className= {nameClass}>
          <img src= {`../src/assets/images/mini_collection/TPH_0${i}.jpg`} height="200" width="200" alt={`NFT_${i}`} />;
        </div>);
    }
  }

  let slideA = [];
  let slideB = [];
  let slideC = [];

  imgTab(slideA,"slide-L",1,22);
  imgTab(slideB,"slide-R",18,39);
  imgTab(slideC,"slide-L",35,50);
  imgTab(slideC,"slide-L",1,6);

  slideB = slideB.reverse();

  return (
    <>
      <div className="slider-L">
        <div className="slide-track-L">
          {slideA}
        </div>
      </div>

      <div className="slider-R">
        <div className="slide-track-R">
          {slideB}
        </div>
      </div>

      <div className="slider-L">
        <div className="slide-track-L">
          {slideC}
        </div>
      </div>
    </>
  )
}