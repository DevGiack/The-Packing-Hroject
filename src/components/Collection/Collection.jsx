
import { v1 as uuidv1 } from 'uuid';
import mistery from "../../assets/images/mini_collection/NFT_MYSTERY.jpg";
import "./Collection.css";
import { Network, Alchemy } from 'alchemy-sdk';
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

const network = {"80001": "polygon-mumbai",
"137": "polygon-mainnet", "1": "eth-mainnet"
}

const settings = {
  apiKey: import.meta.env.VITE_MORALIS_API_KEY,
  network: network[window.ethereum.networkVersion],
};

const alchemy = new Alchemy(settings);


// 0xdd72334f64c6129Fd80c088fD139e60E743f9aaC

const getList = async () => {
  const collection = await alchemy.nft.getNftsForContract("0xdd72334f64c6129Fd80c088fD139e60E743f9aaC")
  console.log(collection.nfts.length)
  const list_nft = [NFT1, NFT2, NFT3, NFT4, NFT5, NFT6, NFT7, NFT8, NFT9, NFT10, NFT11, NFT12, NFT13, NFT14, NFT15, NFT16, NFT17, NFT18, NFT19, NFT20, NFT21, NFT22, NFT23, NFT24,NFT25, NFT26, NFT27, NFT28, NFT29, NFT30, NFT31, NFT32, NFT33, NFT34, NFT35, NFT36, NFT37, NFT38, NFT39, NFT40, NFT41, NFT42, NFT43, NFT44, NFT45, NFT46, NFT47, NFT48, NFT49, NFT50];
  const list_1 = list_nft.slice(0, collection.nfts.length)
  console.log(list_1)
  const list_2 = Array(50 - collection.nfts.length).fill(mistery)
    console.log(list_2)
    const list_3 = [...list_1, ...list_2]
    console.log(list_3)
  return list_3;
}

const list = getList()

export const Collection =(list) => {
  
  const imgTab = (slide, nameClass, start, end) => {
    for (let i = start; i <= end; i++) {
      const id = uuidv1();
      slide.push(
        <div key={id} className= {nameClass}>
          <img src={NFT1} height="200" width="200" alt={`NFT_${i}`} />;
        </div>);
    }
  }

  let slideA = [];
  let slideB = [];
  let slideC = [];
  let slideD = [];
  let slideE = [];
  let slideF = [];
  let slideG = [];
  let slideH = [];
  let slideI = [];
  let slideJ = [];

  imgTab(slideA,"slideL",1,5);
  imgTab(slideB,"slideR",6,10);
  imgTab(slideC,"slideL",11,15);
  imgTab(slideD,"slideR",16,20);
  imgTab(slideE,"slideL",21,25);
  imgTab(slideF,"slideR",26,30);
  imgTab(slideG,"slideL",31,35);
  imgTab(slideH,"slideR",36,40);
  imgTab(slideI,"slideL",41,45);
  imgTab(slideJ,"slideR",46,50);


  slideB = slideB.reverse();
  slideD = slideD.reverse();
  slideF = slideF.reverse();
  slideH = slideH.reverse();
  slideJ = slideJ.reverse();
  
  return (
    <>
      <div className="sliderL">
        <div className="slidetrackL">
          {slideA}
        </div>
      </div>

      <div className="sliderR">
        <div className="slidetrackR">
          {slideB}
        </div>
      </div>

      <div className="sliderL">
        <div className="slidetrackL">
          {slideC}
        </div>
      </div>
      
      <div className="sliderR">
        <div className="slidetrackR">
          {slideD}
        </div>
      </div>

      <div className="sliderL">
        <div className="slidetrackL">
          {slideE}
        </div>
      </div>

      <div className="sliderR">
        <div className="slidetrackR">
          {slideF}
        </div>
      </div>

      <div className="sliderL">
        <div className="slidetrackL">
          {slideG}
        </div>
      </div>

      <div className="sliderR">
        <div className="slidetrackR">
          {slideH}
        </div>
      </div>

      <div className="sliderL">
        <div className="slidetrackL">
          {slideI}
        </div>
      </div>

      <div className="sliderR">
        <div className="slidetrackR">
          {slideJ}
        </div>
      </div>
    </>
  )
}