import { v1 as uuidv1 } from "uuid"
import { Alchemy } from "alchemy-sdk"
import "./Collection.css"
import mistery from "../../assets/images/mini_collection/NFT_MYSTERY.jpg"
import NFT1 from "../../assets/images/mini_collection/TPH_01.jpg"
import NFT2 from "../../assets/images/mini_collection/TPH_02.jpg"
import NFT3 from "../../assets/images/mini_collection/TPH_03.jpg"
import NFT4 from "../../assets/images/mini_collection/TPH_04.jpg"
import NFT5 from "../../assets/images/mini_collection/TPH_05.jpg"
import NFT6 from "../../assets/images/mini_collection/TPH_06.jpg"
import NFT7 from "../../assets/images/mini_collection/TPH_07.jpg"
import NFT8 from "../../assets/images/mini_collection/TPH_08.jpg"
import NFT9 from "../../assets/images/mini_collection/TPH_09.jpg"
import NFT10 from "../../assets/images/mini_collection/TPH_010.jpg"
import NFT11 from "../../assets/images/mini_collection/TPH_011.jpg"
import NFT12 from "../../assets/images/mini_collection/TPH_012.jpg"
import NFT13 from "../../assets/images/mini_collection/TPH_013.jpg"
import NFT14 from "../../assets/images/mini_collection/TPH_014.jpg"
import NFT15 from "../../assets/images/mini_collection/TPH_015.jpg"
import NFT16 from "../../assets/images/mini_collection/TPH_016.jpg"
import NFT17 from "../../assets/images/mini_collection/TPH_017.jpg"
import NFT18 from "../../assets/images/mini_collection/TPH_018.jpg"
import NFT19 from "../../assets/images/mini_collection/TPH_019.jpg"
import NFT20 from "../../assets/images/mini_collection/TPH_020.jpg"
import NFT21 from "../../assets/images/mini_collection/TPH_021.jpg"
import NFT22 from "../../assets/images/mini_collection/TPH_022.jpg"
import NFT23 from "../../assets/images/mini_collection/TPH_023.jpg"
import NFT24 from "../../assets/images/mini_collection/TPH_024.jpg"
import NFT25 from "../../assets/images/mini_collection/TPH_025.jpg"
import NFT26 from "../../assets/images/mini_collection/TPH_026.jpg"
import NFT27 from "../../assets/images/mini_collection/TPH_027.jpg"
import NFT28 from "../../assets/images/mini_collection/TPH_028.jpg"
import NFT29 from "../../assets/images/mini_collection/TPH_029.jpg"
import NFT30 from "../../assets/images/mini_collection/TPH_030.jpg"
import NFT31 from "../../assets/images/mini_collection/TPH_031.jpg"
import NFT32 from "../../assets/images/mini_collection/TPH_032.jpg"
import NFT33 from "../../assets/images/mini_collection/TPH_033.jpg"
import NFT34 from "../../assets/images/mini_collection/TPH_034.jpg"
import NFT35 from "../../assets/images/mini_collection/TPH_035.jpg"
import NFT36 from "../../assets/images/mini_collection/TPH_036.jpg"
import NFT37 from "../../assets/images/mini_collection/TPH_037.jpg"
import NFT38 from "../../assets/images/mini_collection/TPH_038.jpg"
import NFT39 from "../../assets/images/mini_collection/TPH_039.jpg"
import NFT40 from "../../assets/images/mini_collection/TPH_040.jpg"
import NFT41 from "../../assets/images/mini_collection/TPH_041.jpg"
import NFT42 from "../../assets/images/mini_collection/TPH_042.jpg"
import NFT43 from "../../assets/images/mini_collection/TPH_043.jpg"
import NFT44 from "../../assets/images/mini_collection/TPH_044.jpg"
import NFT45 from "../../assets/images/mini_collection/TPH_045.jpg"
import NFT46 from "../../assets/images/mini_collection/TPH_046.jpg"
import NFT47 from "../../assets/images/mini_collection/TPH_047.jpg"
import NFT48 from "../../assets/images/mini_collection/TPH_048.jpg"
import NFT49 from "../../assets/images/mini_collection/TPH_049.jpg"
import NFT50 from "../../assets/images/mini_collection/TPH_050.jpg"

const randomized = [
    17, 20, 18, 3, 1, 19, 23, 21, 8, 2, 5, 7, 4, 6, 9, 22, 11, 24, 30, 10, 29,
    12, 31, 13, 14, 16, 26, 15, 25, 32, 27, 28, 40, 39, 50, 49, 44, 42, 41, 43,
    45, 47, 38, 48, 46, 36, 37, 33, 34, 35,
]

const network = {
    80001: "polygon-mumbai",
    137: "polygon-mainnet",
    1: "eth-mainnet",
}

const settings = {
    apiKey: import.meta.env.VITE_MORALIS_API_KEY,
    network: network["80001"],
}

const alchemy = new Alchemy(settings)

// 0xee510D0B3F41C113c7A61F3AfF3D04dE43Bc3049

const getList = async () => {
    const collection = await alchemy.nft.getNftsForContract(
        "0xee510D0B3F41C113c7A61F3AfF3D04dE43Bc3049"
    )
    const list_nft = [
        NFT1, NFT2, NFT3, NFT4, NFT5, NFT6, NFT7, NFT8, NFT9, NFT10,
        NFT11, NFT12, NFT13, NFT14, NFT15, NFT16, NFT17, NFT18, NFT19, NFT20,
        NFT21, NFT22, NFT23, NFT24, NFT25, NFT26, NFT27, NFT28, NFT29, NFT30,
        NFT31, NFT32, NFT33, NFT34, NFT35, NFT36, NFT37, NFT38, NFT39, NFT40,
        NFT41, NFT42, NFT43, NFT44, NFT45, NFT46, NFT47, NFT48, NFT49, NFT50
    ]
    const list_1 = list_nft.slice(0, collection.nfts.length)
    const list_2 = Array(50 - collection.nfts.length).fill(mistery)
    const list_3 = [...list_1, ...list_2]
    return list_3
}

const getTooltipList = async () => {
  const collection = await alchemy.nft.getNftsForContract("0xee510D0B3F41C113c7A61F3AfF3D04dE43Bc3049")
  const traitList = randomized.map((x, i) => {
    return collection.nfts.length >= i ? collection.nfts[i] ? collection.nfts[i].rawMetadata.attributes : "???" : "???";
  });

  let result = [];
  const metadata = traitList.map((x, i) => {
    let res = [];
    if (collection.nfts.length >= i) {
      if (collection.nfts[i]) {
        x.forEach((hash) => res.push(hash.value)); // hash.trait_type for attributes
      }
      else {
        res.push("???");
      }
    }
    let attributes = {
      "GENRE" : res[0],
      "LANGUAGE" : res[1],
      "EXPRESSION" : res[2],
      "GLASSES" : res[3],
      "LISERE_TPH" : res[4],
      "STICKER" : res[5],
      "ARTICLE" : res[6],
      "BACKGROUND_COLOR" : res[7],
      "COMPUTER" : res[8]
    }
    result.push(attributes);
    return result;
  });
  return metadata;
}

const metadata = await getTooltipList()

const list = await getList()

export const Collection =() => {

  const imgTab = (slide, nameClass, start, end) => {
    for (let i = start; i <= end; i++) {
      const img = list[randomized[i-1]-1]
      const id = uuidv1()
      const meta = metadata[randomized[i-1]-1]
      slide.push(
        <div key={id} className={nameClass}>
          <img src={img} height="200" width="200" alt={`NFT_${i}`} />
          <span className="tooltiptext">
            <span className='attribut'>GENRE : &nbsp;</span>
            <span className='value'>{meta[randomized[i-1]-1].GENRE ? meta[randomized[i-1]-1].GENRE : "???"}</span><br></br>
            <span className='attribut'>LANGUAGE : &nbsp;</span>
            <span className='value'>{meta[randomized[i-1]-1].LANGUAGE ? meta[randomized[i-1]-1].LANGUAGE : "???"}</span><br></br>
            <span className='attribut'>EXPRESSION : &nbsp;</span>
            <span className='value'>{meta[randomized[i-1]-1].EXPRESSION ? meta[randomized[i-1]-1].EXPRESSION : "???"}</span><br></br>
            <span className='attribut'>GLASSES : &nbsp;</span>
            <span className='value'>{meta[randomized[i-1]-1].GLASSES ? meta[randomized[i-1]-1].GLASSES : "???"}</span><br></br>
            <span className='attribut'>LISERE_TPH : &nbsp;</span>
            <span className='value'>{meta[randomized[i-1]-1].LISERE_TPH ? meta[randomized[i-1]-1].LISERE_TPH : "???"}</span><br></br>
            <span className='attribut'>STICKER : &nbsp;</span>
            <span className='value'>{meta[randomized[i-1]-1].STICKER ? meta[randomized[i-1]-1].STICKER : "???"}</span><br></br>
            <span className='attribut'>ARTICLE : &nbsp;</span>
            <span className='value'>{meta[randomized[i-1]-1].ARTICLE ? meta[randomized[i-1]-1].ARTICLE : "???"}</span><br></br>
            <span className='attribut'>BACKGROUND_COLOR : &nbsp;</span>
            <span className='value'>{meta[randomized[i-1]-1].BACKGROUND_COLOR ? meta[randomized[i-1]-1].BACKGROUND_COLOR : "???"}</span><br></br>
            <span className='attribut'>COMPUTER : &nbsp;</span>
            <span className='value'>{meta[randomized[i-1]-1].COMPUTER ? meta[randomized[i-1]-1].COMPUTER : "???"}</span>
          </span>
        </div>)
    }
  }

    let slideA = []
    let slideB = []
    let slideC = []
    let slideD = []
    let slideE = []
    let slideF = []
    let slideG = []
    let slideH = []
    let slideI = []
    let slideJ = []

    imgTab(slideA, "slideL tooltip", 1, 5)
    imgTab(slideB, "slideR tooltip", 6, 10)
    imgTab(slideC, "slideL tooltip", 11, 15)
    imgTab(slideD, "slideR tooltip", 16, 20)
    imgTab(slideE, "slideL tooltip", 21, 25)
    imgTab(slideF, "slideR tooltip", 26, 30)
    imgTab(slideG, "slideL tooltip", 31, 35)
    imgTab(slideH, "slideR tooltip", 36, 40)
    imgTab(slideI, "slideL tooltip", 41, 45)
    imgTab(slideJ, "slideR tooltip", 46, 50)

    slideB = slideB.reverse()
    slideD = slideD.reverse()
    slideF = slideF.reverse()
    slideH = slideH.reverse()
    slideJ = slideJ.reverse()

    return (
        <>
            <div className="sliderL">
                <div className="slidetrackL">{slideA}</div>
            </div>

            <div className="sliderR">
                <div className="slidetrackR">{slideB}</div>
            </div>

            <div className="sliderL">
                <div className="slidetrackL">{slideC}</div>
            </div>

            <div className="sliderR">
                <div className="slidetrackR">{slideD}</div>
            </div>

            <div className="sliderL">
                <div className="slidetrackL">{slideE}</div>
            </div>

            <div className="sliderR">
                <div className="slidetrackR">{slideF}</div>
            </div>

            <div className="sliderL">
                <div className="slidetrackL">{slideG}</div>
            </div>

            <div className="sliderR">
                <div className="slidetrackR">{slideH}</div>
            </div>

            <div className="sliderL">
                <div className="slidetrackL">{slideI}</div>
            </div>

            <div className="sliderR">
                <div className="slidetrackR">{slideJ}</div>
            </div>
        </>
    )
}