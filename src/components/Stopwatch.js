import { useState, useRef } from "react";

const Stopwatch = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timeRef = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    timeRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(timeRef.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    timeRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(timeRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  };

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className="stopwatch">
      <h1>Stopwatch </h1>
      <div>
        <p id="formatTime">{formatTime()}</p>
        <div>
          {!isActive && !isPaused ? (
            <button className="button-85" onClick={handleStart}>Start</button>
          ) : isPaused ? (
            <button className="button-85" onClick={handlePause}>Pause</button>
          ) : (
            <button className="button-85" onClick={handleResume}>Resume</button>
          )}
          <button className="button-85" onClick={handleReset} disabled={!isActive}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;



/* 
  const [start, setStart] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStart(Date.now() - (now - start));
    setNow(Date.now());

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(function() {
      setNow(Date.now());
    }, 100);
  }

  function handleStop() {
    clearInterval(intervalRef.current)
  }

  let secondsPassed = 0;
  if (start !== null && now !== null) {
    secondsPassed = (now - start) / 1000;
  }
  return (
    <div className="App">
      <h1>Number of seconds passed: {secondsPassed}</h1>
      <button onClick={handleStart}>Start/Resume</button>
      <button onClick={handleStop}>Stop/Pause</button>
    </div>
  )
*/