import React, { useState } from "react";
import head from "./head.jpg";
import tail from "./tail.png";
import "./CoinFlip.css";
import Coin from "./Coin";

function CoinFlip(props) {
  const [coinIdx, setCoinIndex] = useState(0);
  const coin = props.coin[coinIdx];
  const [countFlip, setCountFlip] = useState(0);
  const [headCount, setHeadCount] = useState(0);
  const [tailCount, setTailCount] = useState(0);
  
  const flipCoin = () => {
    const random = Math.random();
    const index = random < 0.50 ? 0 : 1;
    setCoinIndex(index);
    updateCount(index);
  }

  const updateCount = (index) => {
    setCountFlip(countFlip + 1);
    if(countFlip >= 10){
      setCountFlip(0);
      setHeadCount(0);
      setTailCount(0);
    }else{
      sideCount(index);
    }
  }
  const sideCount = (index) => {
    if(index === 0){
      setHeadCount(headCount +1);
    }
    if(index === 1){
      setTailCount(tailCount +1);
    }
  }

  return (
    <div className="app">
      <h2>Let's flip a coin!</h2>
      {countFlip > 0 && countFlip <= 10 && 
      <Coin
      src={coin.src}
      alt={coin.caption}
      data-testid="coin-image"
      />}
      
      <button onClick={flipCoin} className="btn" data-testid="flip-button">
        Flip me
        </button>
      <p>Out of {countFlip} flips, 
      there have been {headCount} heads and {tailCount} tails.</p>
    </div>
  );
}

CoinFlip.defaultProps = {
  coin: [
    {
      src: head,
      caption: "quarter-head"
    },
    {
      src: tail,
      caption: "quarter-tail"
    }
  ]
}

export default CoinFlip;
