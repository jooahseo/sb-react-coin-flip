import React, { useState } from "react";
import head from "./head.jpg";
import tail from "./tail.png";
import "./CoinFlip.css";
import Coin from "./Coin";

function CoinFlip(props) {
  const [coinSide, setCoinSide] = useState(head);
  const flipCoin = () => {
    const side = coinSide === head ? tail : head;
    setCoinSide(side);
  }
  return (
    <div className="app">
      <h2>Let's flip a coin!</h2>
      <Coin
      src={coinSide}
      />
      <button onClick={flipCoin} className="btn">Flip me</button>
    </div>
  );
}

export default CoinFlip;
