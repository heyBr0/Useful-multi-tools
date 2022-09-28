import { useState, useEffect } from "react";

function Crypto() {
  const firstURL = "https://api.coinbase.com/v2/prices";

  const initialAmountC = localStorage.getItem("amountC") || 1;
  const initialCrypto = localStorage.getItem("crypto") || "btc";
  const initialCurrency = localStorage.getItem("currency") || "usd";
  const initialResultC = localStorage.getItem("resultC") || 0;

  // user input
  const [amountC, setAmountC] = useState(initialAmountC);
  const handleChange = (event) => {
    setAmountC(event.target.value);
  };
  const [crypto, setCrypto] = useState(initialCrypto);
  const chooseCrypto = (event) => {
    setCrypto(event.target.value);
  };
  const [currency, setCurrency] = useState(initialCurrency);
  const chooseCurrency = (event) => {
    setCurrency(event.target.value);
  };
  const [resultC, setResult] = useState(initialResultC);

  useEffect(() => {
    localStorage.setItem("amountC", amountC);
  }, [amountC]);

  useEffect(() => {
    localStorage.setItem("crypto", crypto);
  }, [crypto]);

  useEffect(() => {
    localStorage.setItem("currency", currency);
  }, [currency]);

  useEffect(() => {
    localStorage.setItem("resultC", resultC);
  }, [resultC]);

  function convert() {
    let url = `${firstURL}/${crypto}-${currency}/spot`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.amount);
        let sum = (data.data.amount * amountC).toFixed(2);
        setResult(sum);
        console.log(sum);
      })
      .catch((err) => console.log("Rejected ", err.message));
  }

  return (
    <div className="container">
      <h1>Crypto calculator</h1>
      <form>
        <div className="currencyColumn">
          <label htmlFor="crypto">Crypto: </label>
          <div>
            <select
              name="crypto"
              id="crypto"
              value={crypto}
              onChange={chooseCrypto}
            >
              <option value="btc">Bitcoin</option>
              <option value="ltc">Litecoin</option>
              <option value="eth">Ethereum</option>
            </select>
          </div>
        </div>

        <div className="currencyColumn">
          <label>Amount: </label>
          <div>
            <input
              type="number"
              id="amount"
              name="amount"
              min="1"
              onChange={handleChange}
              value={amountC}
            />
          </div>
        </div>

        <div className="currencyColumn">
          <label htmlFor="currency">Currency: </label>
          <div>
            <select
              name="currency"
              id="currency"
              value={currency}
              onChange={chooseCurrency}
            >
              <option value="usd">US Dollar</option>
              <option value="eur">EURO</option>
              <option value="gbp">GB Pound</option>
            </select>
          </div>
        </div>
      </form>

      <button className="button-85" onClick={convert}>
        Convert
      </button>
      <form>
        <div className="currencyColumn">
          <label>Result: </label>
          <div>
            <input
              type="number"
              name="result"
              id="result"
              readOnly
              value={resultC}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Crypto;
