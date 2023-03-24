import { Alchemy } from "alchemy-sdk"
import NFT_MYSTERY from "../assets/images/mini_collection/NFT_MYSTERY.webp"
import NFT1 from "../assets/images/mini_collection/TPH_01.webp"
import NFT2 from "../assets/images/mini_collection/TPH_02.webp"
import NFT3 from "../assets/images/mini_collection/TPH_03.webp"
import NFT4 from "../assets/images/mini_collection/TPH_04.webp"
import NFT5 from "../assets/images/mini_collection/TPH_05.webp"
import NFT6 from "../assets/images/mini_collection/TPH_06.webp"
import NFT7 from "../assets/images/mini_collection/TPH_07.webp"
import NFT8 from "../assets/images/mini_collection/TPH_08.webp"
import NFT9 from "../assets/images/mini_collection/TPH_09.webp"
import NFT10 from "../assets/images/mini_collection/TPH_010.webp"
import NFT11 from "../assets/images/mini_collection/TPH_011.webp"
import NFT12 from "../assets/images/mini_collection/TPH_012.webp"
import NFT13 from "../assets/images/mini_collection/TPH_013.webp"
import NFT14 from "../assets/images/mini_collection/TPH_014.webp"
import NFT15 from "../assets/images/mini_collection/TPH_015.webp"
import NFT16 from "../assets/images/mini_collection/TPH_016.webp"
import NFT17 from "../assets/images/mini_collection/TPH_017.webp"
import NFT18 from "../assets/images/mini_collection/TPH_018.webp"
import NFT19 from "../assets/images/mini_collection/TPH_019.webp"
import NFT20 from "../assets/images/mini_collection/TPH_020.webp"
import NFT21 from "../assets/images/mini_collection/TPH_021.webp"
import NFT22 from "../assets/images/mini_collection/TPH_022.webp"
import NFT23 from "../assets/images/mini_collection/TPH_023.webp"
import NFT24 from "../assets/images/mini_collection/TPH_024.webp"
import NFT25 from "../assets/images/mini_collection/TPH_025.webp"
import NFT26 from "../assets/images/mini_collection/TPH_026.webp"
import NFT27 from "../assets/images/mini_collection/TPH_027.webp"
import NFT28 from "../assets/images/mini_collection/TPH_028.webp"
import NFT29 from "../assets/images/mini_collection/TPH_029.webp"
import NFT30 from "../assets/images/mini_collection/TPH_030.webp"
import NFT31 from "../assets/images/mini_collection/TPH_031.webp"
import NFT32 from "../assets/images/mini_collection/TPH_032.webp"
import NFT33 from "../assets/images/mini_collection/TPH_033.webp"
import NFT34 from "../assets/images/mini_collection/TPH_034.webp"
import NFT35 from "../assets/images/mini_collection/TPH_035.webp"
import NFT36 from "../assets/images/mini_collection/TPH_036.webp"
import NFT37 from "../assets/images/mini_collection/TPH_037.webp"
import NFT38 from "../assets/images/mini_collection/TPH_038.webp"
import NFT39 from "../assets/images/mini_collection/TPH_039.webp"
import NFT40 from "../assets/images/mini_collection/TPH_040.webp"
import NFT41 from "../assets/images/mini_collection/TPH_041.webp"
import NFT42 from "../assets/images/mini_collection/TPH_042.webp"
import NFT43 from "../assets/images/mini_collection/TPH_043.webp"
import NFT44 from "../assets/images/mini_collection/TPH_044.webp"
import NFT45 from "../assets/images/mini_collection/TPH_045.webp"
import NFT46 from "../assets/images/mini_collection/TPH_046.webp"
import NFT47 from "../assets/images/mini_collection/TPH_047.webp"
import NFT48 from "../assets/images/mini_collection/TPH_048.webp"
import NFT49 from "../assets/images/mini_collection/TPH_049.webp"
import NFT50 from "../assets/images/mini_collection/TPH_050.webp"
import { statistiques } from "../statistiques/statistiques"

async function getCollection() {
  const collection = await getAlchemy().nft.getNftsForContract(
    "0x6b75a793421d5ee29ba3f47d25073b01320936ac"
  )
  return collection.nfts
}

const getRandomizedArray = () => {
  return ([
  32, 12, 18, 11, 21,
  7, 48, 23, 27, 17,
  1, 49, 13, 16, 9,
  42, 37, 26, 30, 47,
  8, 31, 43, 45, 3,
  41, 39, 15, 25, 2,
  50, 14, 40, 35, 19,
  36, 44, 22, 6, 34,
  20, 5, 4, 46, 33,
  29, 24, 38, 10, 28
  ])
}

const getAlchemy = () => {
  const settings = {
    apiKey: import.meta.env.VITE_ALCHEMY_API_KEY,
    network: import.meta.env.VITE_ALCHEMY_NETWORK_ID,
  }
  return new Alchemy(settings)
}

const getTraitColor = (percent) => {
  return percent === 2 ? "orange" : 
  percent > 2  && percent <= 9 ? "purple" : 
  percent >= 10 && percent <= 19 ? "blue" : 
  percent >= 20 && percent <= 36 ? "green" : 
  percent > 36 ? "gray" :
  "";
}

async function  getList () {
  const collection = await getCollection()
  const list_nft = [
    NFT1, NFT2, NFT3, NFT4, NFT5, NFT6, NFT7, NFT8, NFT9, NFT10,
    NFT11, NFT12, NFT13, NFT14, NFT15, NFT16, NFT17, NFT18, NFT19, NFT20,
    NFT21, NFT22, NFT23, NFT24, NFT25, NFT26, NFT27, NFT28, NFT29, NFT30,
    NFT31, NFT32, NFT33, NFT34, NFT35, NFT36, NFT37, NFT38, NFT39, NFT40,
    NFT41, NFT42, NFT43, NFT44, NFT45, NFT46, NFT47, NFT48, NFT49, NFT50
  ]
  const list_1 = list_nft.slice(0, collection.length)
  const list_2 = Array(50 - collection.length).fill(NFT_MYSTERY)
  const list_3 = [...list_1, ...list_2]
  return list_3
}

async function  getTooltipList () {

  const collection = await getCollection()

  const traitList = collection.map((x) => {
    let res = [];
    x.rawMetadata.attributes.forEach((hash) => res.push(hash.value));
    const attributeNames = ["GENRE", "LANGUAGE", "EXPRESSION", "GLASSES", "BORDER", "STICKER", "ARTICLE", "BACKGROUND", "COMPUTER"];
    const attributes = attributeNames.map((attributeName, index) => ({
      traitName: attributeName,
      traitValue: res[index],
      traitPercent: statistiques[index][res[index]],
      traitColor: getTraitColor(statistiques[index][res[index]])
    }));
    return attributes
  });

  let defaultTL = Array(50 - collection.length).fill([
    {"traitValue": "???", "traitName": "GENRE"},
    {"traitValue": "???", "traitName": "LANGUAGE"},
    {"traitValue": "???", "traitName": "EXPRESSION"},
    {"traitValue": "???", "traitName": "GLASSES"},
    {"traitValue": "???", "traitName": "BORDER"},
    {"traitValue": "???", "traitName": "STICKER"},
    {"traitValue": "???", "traitName": "ARTICLE"},
    {"traitValue": "???", "traitName": "BACKGROUND"},
    {"traitValue": "???", "traitName": "COMPUTER"}
  ])

  return [...traitList, ...defaultTL]
}

export { getCollection, getRandomizedArray, getList, getTooltipList, getTraitColor, getAlchemy }