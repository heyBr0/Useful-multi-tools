import { useState, useEffect } from "react";

function Exchange() {
  const [usd, setUsd] = useState(0);
  const [gbp, setGbp] = useState(0);
  const [cny, setCny] = useState(0);
  const [rub, SetRub] = useState(0);
  const [inr, setInr] = useState(0);
  const [chf, setChf] = useState(0);

  let requestURL = "https://api.exchangerate.host/latestbase=EUR";
  let request = new XMLHttpRequest();
  request.open("GET", requestURL);
  request.responseType = "json";
  request.send();

  request.onload = function requestRates() {
    let response = request.response;
    let rateUSD = response.rates.USD;
    let rateGBP = response.rates.GBP;
    let rateCNY = response.rates.CNY;
    let rateRUB = response.rates.RUB;
    let rateINR = response.rates.INR;
    let rateCHF = response.rates.CHF;
    setUsd(rateUSD.toFixed(2));
    setGbp(rateGBP.toFixed(2));
    setCny(rateCNY.toFixed(2));
    SetRub(rateRUB.toFixed(2));
    setInr(rateINR.toFixed(2));
    setChf(rateCHF.toFixed(2));
  };

  // user input

  const initialAmount = localStorage.getItem("amount") || 1;
  const initialCurrency1 = localStorage.getItem("currency1") || "eur";
  const initialCurrency2 = localStorage.getItem("currency2") || "gbp";
  const initialResult = localStorage.getItem("result") || 0;

  const [amount, setAmount] = useState(initialAmount);
  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  const [currency1, setCurrency1] = useState(initialCurrency1);
  const chooseCurrency1 = (event) => {
    setCurrency1(event.target.value);
  };

  const [currency2, setCurrency2] = useState(initialCurrency2);
  const chooseCurrency2 = (event) => {
    setCurrency2(event.target.value);
  };

  const [result, setResult] = useState(initialResult);

  // local storage

  useEffect(() => {
    localStorage.setItem("amount", amount);
  }, [amount]);

  useEffect(() => {
    localStorage.setItem("currency1", currency1);
  }, [currency1]);

  useEffect(() => {
    localStorage.setItem("currency2", currency2);
  }, [currency2]);

  useEffect(() => {
    localStorage.setItem("result", result);
  }, [result]);

  // convert

  function convert() {
    let requestURL = `https://api.exchangerate.host/convert?from=${currency1}&to=${currency2}`;
    let request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();

    request.onload = function () {
      let response = request.response;
      console.log(response);
      let output = (response.result * amount).toFixed(2);
      setResult(output);
    };
  }

  return (
    <div className="exchange">
      <h1>Exchange currency rates</h1>
      <h2>Current exchange rates for 1 EUR:</h2>
      <form className=".currencyColumn">
        {/*  <h2>USD is: {usd}</h2> */}
        <div>
          <label htmlFor="usd">USD</label>
          <input type="number" value={usd} readOnly />
          <label htmlFor="gbp">GBP</label>
          <input type="number" value={gbp} readOnly />
        </div>
        <div>
          <label htmlFor="rub">RUB</label>
          <input type="number" value={rub} readOnly />
          <label htmlFor="cny">CNY</label>
          <input type="number" value={cny} readOnly />
        </div>
        <div>
          <label htmlFor="inr">INR</label>
          <input type="number" value={inr} readOnly />
          <label htmlFor="chf">CHF</label>
          <input type="number" value={chf} readOnly />
        </div>
      </form>
      <h3 id="h3Converter">Converter:</h3>

      <section>
        <div className="currencyColumn2">
          <label htmlFor="currency1">From: </label>
          <div>
            <select
              name="currency1"
              id="currency1"
              value={currency1}
              onChange={chooseCurrency1}
            >
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
              <option value="CNY">CNY</option>
              <option value="RUB">RUB</option>
              <option value="INR">INR</option>
              <option value="CHF">CHF</option>
            </select>
          </div>
        </div>

        <div className="currencyColumn2">
          <label>Amount: </label>
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
        </div>

        <div className="currencyColumn2">
          <label htmlFor="currency2">To: </label>
          <div>
            <select
              name="currency2"
              id="currency2"
              value={currency2}
              onChange={chooseCurrency2}
            >
              <option value="GBP">GBP</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
              <option value="CNY">CNY</option>
              <option value="RUB">RUB</option>
              <option value="INR">INR</option>
              <option value="CHF">CHF</option>
            </select>
          </div>
        </div>
      </section>
      <button className="button-85" onClick={convert}>
        Convert
      </button>
      <section>
        <div className="currencyColumn footerResult">
          <label>Result:</label>
          <input
            type="number"
            name="result"
            id="result"
            readOnly
            value={result}
          />
        </div>
      </section>
    </div>
  );
}

export default Exchange;
