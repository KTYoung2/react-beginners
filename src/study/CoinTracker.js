import { useEffect, useState } from "react";
import { json } from "react-router-dom";

function App() {
  const [loading, setLoding] = useState(true); 
  const [conins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response)=> response.json())
      .then((json) => {
        setCoins(json);
        setLoding(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins 🪙 ({conins.length})</h1>
      {loading ? <h2> Loading ... 🚬</h2> : null}
      <ul>
        {conins.map((coin) => <li>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price}$</li>)}
      </ul>
    </div>
   
  );
}


