import React from 'react';
import { Network, Alchemy } from 'alchemy-sdk';
import { v1 as uuidv1 } from 'uuid';
import { Link } from "react-router-dom";

const network = {"80001": "polygon-mumbai",
"137": "polygon-mainnet", "1": "eth-mainnet"
}

const settings = {
  apiKey: import.meta.env.VITE_MORALIS_API_KEY,
  network: network[window.ethereum.networkVersion],
};
const alchemy = new Alchemy(settings);
const nftsForOwner = await alchemy.nft.getNftsForOwner(window.ethereum.selectedAddress);

let contractName = '';
let NFTTitle = '';
let imageUrl = '';
let tokenId = '';
let OPFloor = '';

export const Details = () => {
//  console.log(nftsForOwner.ownedNfts)
  return (
  <>
<div className="img_details">
<div><img src="https://nft-cdn.alchemy.com/matic-mumbai/c3284f590b948aaa0ca9a313c91ab76b" alt="..."></img></div>
<div className="metadata_details">"GENRE : MEN TYPE 2
LANGUAGE : HTML/CSS
<br></br>
EXPRESSION : N°3
<br></br>
GLASSES : NO GLASSES
<br></br>
LISERE TPH : CLASSIC
<br></br>
STICKER : STACK OVERFLOW
<br></br>
ARTICLE : POSTER
<br></br>
BACKGROUND COLOR : BROWN
<br></br>
COMPUTER : SILVER"</div>
</div>
  </>
  );
};