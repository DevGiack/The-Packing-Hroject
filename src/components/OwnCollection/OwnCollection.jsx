import React from 'react';
import './OwnCollection.css';
import { Network, Alchemy } from 'alchemy-sdk';
import { v1 as uuidv1 } from 'uuid';
import { atom, useAtom } from 'jotai';
import { UserAddressAtom } from "../atom/UserWalletAddress";

const settings = {
  apiKey: import.meta.env.VITE_MORALIS_API_KEY,
  network: Network.MATIC_MUMBAI,
};
const alchemy = new Alchemy(settings);
const nftsForOwner = await alchemy.nft.getNftsForOwner('0xb3faf97A9A9f6C0a54C6ddFDC4a188E702a45205');

let contractName = '';
let NFTTitle = '';
let imageUrl = '';
let tokenId = '';
let OPFloor = '';

export const OwnCollection = () => {
  console.log(nftsForOwner.ownedNfts)
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
      nftsForOwner.ownedNfts.map((x) => {
          x.tokenId ? x.tokenId.length > 6 ? tokenId = `${x.tokenId.slice(0, 6)}...` : tokenId = x.tokenId : tokenId = 'undefined';
          x.contract.name ? x.contract.name.length > 20 ? contractName = `${x.contract.name.slice(0, 16)}...` : contractName = x.contract.name : contractName = 'undefined';
          x.title ? x.title.length > 20 ? NFTTitle = `${x.title.slice(0, 16)}...` : NFTTitle = x.title : NFTTitle = 'undefined';
          x.media[0].thumbnail ? imageUrl = x.media[0].thumbnail: imageUrl = 'undefined';
        //  x.contract.openSea.floorPrice ? OPFloor = x.contract.openSea.floorPrice : OPFloor = 'undefined';
          const id = uuidv1();
          return (
            <div key={id} className="card">
              <div className="card-body">
                <span className="card-id"># {tokenId}</span>
                <img src={imageUrl} className="card-img" alt="..."></img>
                <span>{contractName}</span>
                <span>{NFTTitle}</span>
                <span className="cardtxt">{OPFloor} ETH</span>
                <div className="card-button-link">
                  <button id="details_button">Details</button>
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