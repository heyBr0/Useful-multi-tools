import { useState } from "react";

function Exchange() {
  const [usd, setUsd] = useState(0);
  const [gbp, setGbp] = useState(0);
  const [cny, setCny] = useState(0);
  const [rub, SetRub] = useState(0);

  let requestURL = "https://api.exchangerate.host/latest";
  let request = new XMLHttpRequest();
  request.open("GET", requestURL);
  request.responseType = "json";
  request.send();

  request.onload = function () {
    let response = request.response;
    let rateUSD = response.rates.USD;
    let rateGBP = response.rates.GBP;
    let rateCNY = response.rates.CNY;
    let rateRUB = response.rates.RUB;
    setUsd(rateUSD.toFixed(2));
    setGbp(rateGBP.toFixed(2));
    setCny(rateCNY.toFixed(2));
    SetRub(rateRUB.toFixed(2));
  };
  // user input
  const [amount, setAmount] = useState(1);
  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  const [currency1, setCurrency1] = useState("eur");
  const chooseCurrency1 = (event) => {
    setCurrency1(event.target.value);
  };

  const [currency2, setCurrency2] = useState("gbp");
  const chooseCurrency2 = (event) => {
    setCurrency2(event.target.value);
  };

  const [result, setResult] = useState(0);

  function convert() {
    const url = `https://api.exchangerate.host/convert?from=${currency1}&to=${currency2}`;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.result);
        let output = (data.result * amount).toFixed(2);
        setResult(output);
      })
      .catch((err) => console.log("Rejected ", err.message));
  }

  return (
    <div className="exchange">
      <h1>Exchange currency rates</h1>
      <h2>Current exchange rates for 1 EUR:</h2>
      <form>
        {/*  <h2>USD is: {usd}</h2> */}
        <label htmlFor="usd">USD</label>
        <input type="number" value={usd} readOnly />
        <label htmlFor="gbp">GBP</label>
        <input type="number" value={gbp} readOnly />
        <label htmlFor="cny">CNY</label>
        <input type="number" value={cny} readOnly />
        <label htmlFor="rub">RUB</label>
        <input type="number" value={rub} readOnly />
      </form>
      <h3>Converter:</h3>
      <form>
        <div>
          <label htmlFor="currency1">From:</label>
          <select name="currency1" id="currency1" onChange={chooseCurrency1}>
            <option value="eur">EUR</option>
            <option value="usd">USD</option>
            <option value="gbp">GBP</option>
            <option value="cny">CNY</option>
            <option value="rub">RUB</option>
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
          <label htmlFor="currency2">To:</label>
          <select name="currency2" id="currency2" onChange={chooseCurrency2}>
            <option value="gbp">GBP</option>
            <option value="eur">EUR</option>
            <option value="usd">USD</option>
            <option value="cny">CNY</option>
            <option value="rub">RUB</option>
          </select>
        </div>
      </form>
      <p>Result:</p>
      <input type="number" name="result" id="result" readOnly value={result} />
      <button onClick={convert}>Convert</button>
    </div>
  );
}

export default Exchange;
