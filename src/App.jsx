import "./App.css";
import "./Dice.css";
import "./Coin.css";
import "./Flower.css";
import Dice from "./Dice";
import Coin from "./Coin";
import Flower from "./Flower";
function App() {
  return (
    <>
   <div className="center-wrapper">
  <div className="container">
    <div className="section">
      <h1>Gājienu palīgs</h1>
      <Dice />
    </div>

    <div className="section">
      <h1>Monēta</h1>
      <Coin />
    </div>

    <div className="section flower-section">
      <h1>Zieds</h1>
      <Flower />
      <button onClick={() => window.location.reload()}>Atjaunot ziedus</button>
    </div>
  </div>
</div>

    </>
  );
}

export default App;
