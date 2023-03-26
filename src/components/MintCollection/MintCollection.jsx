import { getCollection } from "../../utils/utils";
import { Collection } from "../Collection/Collection";
import { MintButton } from '../MintButton/MintButton';
import { useEffect } from 'react';
import { ethers } from 'ethers';
import { abi } from "../../utils/abi";
import confetti from 'canvas-confetti';
import './MintCollection.css';

let address = ""

if (window.ethereum && window.ethereum.selectedAddress) {
  address = window.ethereum.selectedAddress
}

const list = await getCollection();

export const MintCollection = () => {

  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
    
      useEffect(() => {  
      const x = setInterval(function () {
      const countDownDate = new Date(2023, 1, 24, 23, 59, 59).getTime();
      const now = new Date().getTime();
      const distance = countDownDate - now;
      document.getElementById("days").innerText = Math.floor(distance / day);
      document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
      document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
      document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);
    
      //do something later when date is reached
      if (distance < 0) {
        document.getElementById("headline").innerText = "Mint is live !";
        document.getElementById("Mint-Button").style.display = "block";
        document.getElementById("countdown").style.display = "none";
        clearInterval(x);
      }
    }, 0);
    return () => clearInterval(x);
  }, []);
  }());

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  const minted = list.length;

  const handleConfetti = () => {
    confetti({
      particleCount: 1200,
      spread: 180
    });
  }

  const askContractToMintNft = async () => {
    const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADRESS;
  
    try {
      const { ethereum } = window;
  
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        console.log(signer)
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);
        console.log("Going to pop wallet now to pay gas...")
        let nftTxn = await connectedContract.mintToken({value: ethers.utils.parseEther("0.001")});
        handleConfetti();
        console.log("Mining...please wait.")
        await nftTxn.wait();
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div id="MintCollection">
      <div className="bloc-title-mint-page">
        <span id="big-title">MINT COLLECTION</span>
        <span id="little-title">The NFTs</span>
        <span id="title-border"></span>
      </div>
      <div className="containerTimer">
        { minted < 50 ? (
          <>
            <h1 id="headline">Minting will be live in :</h1>
            <span style={{display: "none"}} id="Mint-Button" onClick={askContractToMintNft}><MintButton/></span>
            <div id="countdown">
              <p>
                <li className="li-Timer"><span id="days"></span>days</li>
                <li className="li-Timer"><span id="hours"></span>Hours</li>
                <li className="li-Timer"><span id="minutes"></span>Minutes</li>
                <li className="li-Timer"><span id="seconds"></span>Seconds</li>
              </p>
              <hr id="hr-MintPage"/>
            </div>
            <div className="typewriter">
              <h1>which one will be yours ?</h1>
            </div>
          </>
        ) : (
          <h1 id="headline">SOLD OUT !</h1>
        )}
      </div>
      <Collection />
    </div>
  );
};