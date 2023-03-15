import './MintCollection.css';
import { Network, Alchemy } from 'alchemy-sdk';
import { v1 as uuidv1 } from 'uuid';
import mystery from "../../assets/images/NFT_MYSTERY.jpg";

const settings = {
  apiKey: import.meta.env.VITE_MORALIS_API_KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(settings);
const nftsForOwner = await alchemy.nft.getNftsForOwner('0x3a27dd7008dc7F0903193388C3f613C9064C8ca0');
let contractName = '';
let NFTTitle = '';
let imageUrl = '';
let tokenId = '';
let OPFloor = '';

export const MintCollection = () => {
  return (
  <>
  <div id="MintCollection">
    <div className="bloc-title">
      <span id="big-title">MINT COLLECTION</span>
      <span id="little-title">The NFTs</span>
      <span id="title-border"></span>
    </div>
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
                <img src={mystery} className="card-img" alt="..."></img>
                <span>{contractName}</span>
                <span>{NFTTitle}</span>
                <span className="cardtxt">{OPFloor} ETH</span>
                <div className="card-button-link">
                  <button id="details_button">Mint</button>
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