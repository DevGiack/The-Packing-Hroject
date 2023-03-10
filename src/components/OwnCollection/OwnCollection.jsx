import React from 'react';
import './OwnCollection.css';
import { Network, Alchemy } from 'alchemy-sdk';
import { v1 as uuidv1 } from 'uuid';
import { atom, useAtom } from 'jotai';
import { UserAddressAtom } from "../atom/UserWalletAddress";

const settings = {
  apiKey: import.meta.env.VITE_MORALIS_API_KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(settings);
const nftsForOwner = await alchemy.nft.getNftsForOwner('0x1Fa8a823bbaEAa87bd9aaF0eCb451d1b165254d4');
let contractName = '';
let NFTTitle = '';
let imageUrl = '';
let tokenId = '';
let OPFloor = '';

const OwnCollection = () => {
  return (
  <div className="OwnCollection">
    <div className="bloc-cards">
    {
      nftsForOwner.ownedNfts.map((x) => {
          x.tokenId ? x.tokenId.length > 6 ? tokenId = `${x.tokenId.slice(0, 6)}...` : tokenId = x.tokenId : tokenId = 'undefined';
          x.contract.name ? x.contract.name.length > 20 ? contractName = `${x.contract.name.slice(0, 16)}...` : contractName = x.contract.name : contractName = 'undefined';
          x.title ? x.title.length > 20 ? NFTTitle = `${x.title.slice(0, 16)}...` : NFTTitle = x.title : NFTTitle = 'undefined';
          x.rawMetadata.image ? imageUrl = x.rawMetadata.image : imageUrl = 'undefined';
          x.contract.openSea.floorPrice ? OPFloor = x.contract.openSea.floorPrice : OPFloor = 'undefined';
          const id = uuidv1();
          return (
            <div key={id} className="card">
              <div className="card-body">
                <span className="card-id"># {tokenId}</span>
                <img src="./src/assets/images/mini_collection/NFT_MYSTERY.jpg" className="card-img" alt="..."></img>
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
  );
};

export default OwnCollection;

// sauvegarde de la bonne commande pour l'image :
/* <img src={imageUrl} className="card-img" alt="..."></img> */