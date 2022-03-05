import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

//https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false

function App() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((response) => {
        console.log(response.data);
        setCoins(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form action="">
          <input type="text" placeholder="search" className="coin-input" />
        </form>
      </div>
    </div>
  );
}

export default App;
