import { useState } from "react";

function Math() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [third, setThird] = useState(0);
  const [fourth, setFourth] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const [fifth, setFifth] = useState(0);
  const [sixth, setSixth] = useState(0);
  const [percentage3, setPercentage3] = useState(0);

  function handleChange1(e) {
    setFirst(e.target.value);
  }

  function handleChange2(e) {
    setSecond(e.target.value);
  }

  function handleChange3(e) {
    setThird(e.target.value);
  }
  function handleChange4(e) {
    setFourth(e.target.value);
  }
  function handleChange5(e) {
    setFifth(e.target.value);
  }
  function handleChange6(e) {
    setSixth(e.target.value);
  }

  function calculatePercentage(e) {
    e.preventDefault();
    setPercentage1(((first * second) / 100).toFixed(2));
  }

  function calculatePercentageOf(e) {
    e.preventDefault();
    setPercentage2(((third * 100) / fourth).toFixed(2));
  }

  function calculateDifference(e) {
    e.preventDefault();
    let calc = sixth - fifth;
    setPercentage3(((calc * 100) / fifth).toFixed(2));
  }

  return (
    <div className="math">
      <h1>Percentage Calculations</h1>
      {/* first form */}
      <form id="percentage-form">
        <span>What is</span>
        <div>
          <input
            onChange={handleChange1}
            type="number"
            id="percentage_1"
            step="1"
          />
        </div>
        <span>% out of</span>
        <div>
          <input
            onChange={handleChange2}
            type="number"
            id="percentage_2"
            step="1"
          />
        </div>
        {/*  <span> ? </span> */}
        <div>
          <button className="button-85" onClick={calculatePercentage}>
            Calculate
          </button>
        </div>

        <div>
          <input type="number" readOnly value={percentage1} />
        </div>
      </form>

      {/* second form */}
      <form id="percentageOf-form">
        <div>
          <input
            onChange={handleChange3}
            type="number"
            id="percentageOf_1"
            step="1"
          />
        </div>
        <span> is what % of </span>
        <div>
          <input
            onChange={handleChange4}
            type="number"
            id="percentageOf_2"
            step="1"
          />
        </div>
        {/*       <span>?</span> */}
        <div>
          <button className="button-85" onClick={calculatePercentageOf}>
            {" "}
            Calculate
          </button>
        </div>

        <div>
          <input
            type="number"
            id="percentageOf_result"
            readOnly
            data-operation="percentNumber"
            value={percentage2}
          />
        </div>
      </form>

      {/* third form */}

      <form id="difference-form">
        <span> What is the % increase/decrease from </span>

        <div>
          <input
            onChange={handleChange5}
            type="number"
            id="difference_1"
            step="1"
          />
        </div>
        <span> to</span>
        <div>
          <input
            onChange={handleChange6}
            type="number"
            id="difference_2"
            step="1"
          />
        </div>
        {/*         <span>?</span> */}
        <div>
          <button className="button-85" onClick={calculateDifference}>
            Calculate
          </button>
        </div>

        <div>
          <input
            type="number"
            id="difference_result"
            readOnly
            value={percentage3}
            data-operation="percentNumber"
          />
        </div>
      </form>
    </div>
  );
}

export default Math;
