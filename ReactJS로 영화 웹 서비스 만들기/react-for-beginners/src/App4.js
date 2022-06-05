// 암호화폐

import {useEffect, useState} from 'react'

function App(){
  const [loading,setLoading] = useState(true);
  const [coins,setCoins] = useState([]);
  // 가진 돈
  const [need,setNeed] = useState(1);
  // 코인
  const [cost,setCost] = useState(1);
  const onSelect = (event) => {
    setCost(event.target.value);
    setNeed(1);
  }
  const onInput = (event) => {
    setNeed(event.target.value); 
  }

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then(json => {
      setCoins(json);
      setLoading(false);
    });
  },[]);

  return (
    <div>
      <h1>The Coins!! {loading ? "" : `(${coins.length})`}</h1>

      {loading ? 
        <strong>Loading...</strong> : 
        <select onChange={onSelect}>
          {coins.map((coin,index) => 
            <option key={index} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol} : {coin.quotes.USD.price} USD)
            </option>)}
        </select>}
      <hr/>

      <label htmlFor="you">Your Money : </label>
      <input 
        id="you" 
        type='number'
        onChange={onInput}
        value={need}
        placeholder="dollar"/>$
      <h3>You can get the coin {need/cost}</h3>
      
    </div>
  );
}

export default App;