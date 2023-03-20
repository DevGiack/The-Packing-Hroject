import './MintCollection.css';
import { Collection } from "../Collection/Collection";
import React, { useState, useEffect } from 'react';
import { MintButton } from '../MintButton/MintButton';
import confetti from 'canvas-confetti';

export const MintCollection = () => {

  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
    
      useEffect(() => {  
      const x = setInterval(function () {
      const countDownDate = new Date(2023, 2, 24, 23, 59, 59).getTime();
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

  const handleConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 60
    });
  }
  
  return (
  <>
  <div id="MintCollection">
    <div className="bloc-title-mint-page">
      <span id="big-title">MINT COLLECTION</span>
      <span id="little-title">The NFTs</span>
      <span id="title-border"></span>
    </div>

    <div className="containerTimer">
      <h1 id="headline">Minting will be live in :</h1>
      <span style={{display: "none"}} id="Mint-Button" onClick={handleConfetti}><MintButton/></span>
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
    </div>
    <Collection />
</div>
  </>
  );
};