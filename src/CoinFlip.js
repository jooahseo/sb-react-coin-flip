import React, { useState } from "react";
import head from "./head.jpg";
import tail from "./tail.png";
import "./CoinFlip.css";
import Coin from "./Coin";

function CoinFlip(props) {
  const [coinSide, setCoinSide] = useState(head);
  const [countFlip, setCountFlip] = useState(0);
  const [headCount, setHeadCount] = useState(0);
  const [tailCount, setTailCount] = useState(0);
  
  const flipCoin = () => {
    const random = Math.random();
    const side = random < 0.50 ? head : tail;
    setCoinSide(side);

    updateCount();
  }

  const updateCount = () => {
    setCountFlip(countFlip + 1);
    if(countFlip >= 10){
      setCountFlip(0);
      setHeadCount(0);
      setTailCount(0);
    }else{
      sideCount();
    }
  }
  const sideCount = () => {
    if(coinSide === head){
      setHeadCount(headCount +1);
    }
    if(coinSide === tail){
      setTailCount(tailCount +1);
    }
  }

  return (
    <div className="app">
      <h2>Let's flip a coin!</h2>
      {countFlip > 0 && countFlip <= 10 && 
      <Coin
      src={coinSide}
      />}
      
      <button onClick={flipCoin} className="btn">
        Flip me
        </button>
      <p>Out of {countFlip} flips, 
      there have been {headCount} heads and {tailCount} tails.</p>
    </div>
  );
}

export default CoinFlip;
