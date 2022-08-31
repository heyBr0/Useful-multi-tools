import { useState } from "react";

function Crypto() {
  const firstURL = "https://api.coinbase.com/v2/prices";

  // user input
  const [amount, setAmount] = useState(1);
  const handleChange = (event) => {
    setAmount(event.target.value);
  };
  const [crypto, setCrypto] = useState("btc");
  const chooseCrypto = (event) => {
    setCrypto(event.target.value);
  };
  const [currency, setCurrency] = useState("usd");
  const chooseCurrency = (event) => {
    setCurrency(event.target.value);
  };

  const [result, setResult] = useState(0);

  function convert() {
    let url = `${firstURL}/${crypto}-${currency}/spot`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.amount);
        let sum = (data.data.amount * amount).toFixed(2);
        setResult(sum);
        console.log(sum);
      })
      .catch((err) => console.log("Rejected ", err.message));
  }

  return (
    <div className="container">
      <h1>Crypto calculator:</h1>
      <form>
        <div>
          <label htmlFor="crypto">Crypto</label>
          <select name="crypto" id="crypto" onChange={chooseCrypto}>
            <option value="btc">btc</option>
            <option value="ltc">ltc</option>
            <option value="eth">eth</option>
          </select>
        </div>
        <div>
          <input
            type="number"
            id="amount"
            name="amount"
            min="1"
            onChange={handleChange}
            value={amount}
          />
        </div>
        <div>
          <label htmlFor="currency">Currency</label>
          <select name="currency" id="currency" onChange={chooseCurrency}>
            <option value="usd">usd</option>
            <option value="eur">eur</option>
            <option value="gbp">gbp</option>
          </select>
        </div>
      </form>

      <h2>Value is: {amount}</h2>
      <h2> Crypto chosen is: {crypto}</h2>
      <h2>Currency chosen is {currency}</h2>
      <p>Result:</p>
      <input type="number" name="result" id="result" readOnly value={result} />
      <button onClick={convert}>Convert</button>
    </div>
  );
}

export default Crypto;
