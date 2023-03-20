import React from 'react';
import './OwnCollection.css';
import { Network, Alchemy } from 'alchemy-sdk';
import { v1 as uuidv1 } from 'uuid';
import { Link } from "react-router-dom";

const network = {"80001": "polygon-mumbai",
"137": "polygon-mainnet", "1": "eth-mainnet"
}

  const settings = {
    apiKey: import.meta.env.VITE_MORALIS_API_KEY,
    network: network["80001"],
  };
  const alchemy = new Alchemy(settings);

  let nftsForOwner = []
  window.ethereum ? window.ethereum.selectedAddress ? nftsForOwner = await alchemy.nft.getNftsForOwner(window.ethereum.selectedAddress) : nftsForOwner =[] : nftsForOwner = []

let contractName = '';
let NFTTitle = '';
let imageUrl = '';
let tokenId = '';
let OPFloor = '';

export const OwnCollection = () => {
  return (
  <>
  <div id="OwnCollection">
    <div className="bloc-title">
      <span id="big-title">MY PROFILE</span>
      <span id="little-title">My NFT's</span>
      <span id="title-border"></span>
    </div>
    <div className="bloc-cards">
    {
      nftsForOwner.ownedNfts.filter(obj => obj.title == "THE PACKING HROJECT").map((x) => {
          x.tokenId ? x.tokenId.length > 6 ? tokenId = `${x.tokenId.slice(0, 6)}...` : tokenId = x.tokenId : tokenId = 'undefined';
          x.contract.name ? x.contract.name.length > 20 ? contractName = `${x.contract.name.slice(0, 16)}...` : contractName = x.contract.name : contractName = 'undefined';
          x.title ? x.title.length > 20 ? NFTTitle = `${x.title.slice(0, 16)}...` : NFTTitle = x.title : NFTTitle = 'undefined';
          x.media[0].gateway ? imageUrl = x.media[0].gateway : imageUrl = 'undefined';
        //  x.contract.openSea.floorPrice ? OPFloor = x.contract.openSea.floorPrice : OPFloor = 'undefined';
          const id = uuidv1();
          return (
            <div key={id} className="card">
              <div className="card-body">
                <span className="card-id"># {tokenId}</span>
                <img src={imageUrl} className="card-img" alt="..."></img>
                <span>{NFTTitle}</span>
                <span><b>member {tokenId}/50</b></span>
                <div className="card-button-link">
                <Link to="/details">
                  <button id="details_button">Details</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })
    }
    </div>
  </div>
  </>
  );
};