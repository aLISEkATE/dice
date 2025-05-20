import { useState } from "react";

import img1 from "./assets/coin/img1.jpg";
import img2 from "./assets/coin/img2.jpg";
import "./Coin.css";

const coinImages = [img1, img2];

function Coin() {
    const [coinValue, setCoinValue] = useState(2);

    function rollCoin() {
        const randomNumber = Math.floor(Math.random() * 2) + 1;
        setCoinValue(randomNumber);
    }

    return (
        <article>
            <h2>Monēta</h2>
            <button onClick={rollCoin}>Mest</button>
            <p>Jūs uzmetāt: <strong>{coinValue}</strong></p>
            <img className="coin" src={coinImages[coinValue - 1]} alt={"Metamais kauliņš " + coinValue} />
        </article>
    );
}

export default Coin;
