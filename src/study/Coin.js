import { useState, useEffect } from "react";

function App() {
  const [loading, setLoding] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() =>{
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then(json => {
        setCoins(json);
        setLoding(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins!💰 ({coins.length})</h1>
      {loading ? <strong>Loding ...</strong> : null}
      <ul>
        {coins.map((coin)=> <li> Coin Name "{coin.name}" ({coin.symbol}): ${coin.quotes.USD.price} USD</li>)}
      </ul>
    </div>

  );
}

