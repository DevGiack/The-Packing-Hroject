import './MintCollection.css';
import { Collection } from "../Collection/Collection";

export const MintCollection = () => {

  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
    
    let countDownDate = localStorage.getItem('countDownDate');
    if (!countDownDate) {
      countDownDate = Date.now() + (14 * day); // 14 jours en millisecondes
      localStorage.setItem('countDownDate', countDownDate);
    }
    
    const x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDownDate - now;
    
      document.getElementById("days").innerText = Math.floor(distance / day),
      document.getElementById("hours").innerText = Math.floor((distance % day) / hour),
      document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute),
      document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);
    
      //do something later when date is reached
      if (distance < 0) {
        document.getElementById("headline").innerText = "Mint is live !";
        document.getElementById("countdown").style.display = "none";
        clearInterval(x);
        localStorage.removeItem('countDownDate');
      }
    }, 0)
  }());
  
  return (
  <>
  <div id="MintCollection">
    <div className="bloc-title-mint-page">
      <span id="big-title">MINT COLLECTION</span>
      <span id="little-title">The NFTs</span>
      <span id="title-border"></span>
    </div>

    <div class="containerTimer">
      <h1 id="headline">Start Mint in :</h1>
      <div id="countdown">
        <p>
          <li className="li-Timer"><span id="days"></span>days</li>
          <li className="li-Timer"><span id="hours"></span>Hours</li>
          <li className="li-Timer"><span id="minutes"></span>Minutes</li>
          <li className="li-Timer"><span id="seconds"></span>Seconds</li>
        </p>
        <hr id="hr-MintPage"/>
      </div>
    </div>
</div>

<Collection />
  </>
  );
};