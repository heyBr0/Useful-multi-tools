import axios from "axios";
import { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const KEY = "106b036bdefb4d70af2113344221110";
  const [temperature, setTemperature] = useState("");
  const [condition, setCondition] = useState("");
  const [humidity, setHumidity] = useState("");
  const [day2, setDay2] = useState("");
  const [day2Temp, setDay2Temp] = useState("");
  const [day3, setDay3] = useState("");
  const [day3Temp, setDay3Temp] = useState("");
  const [day4, setDay4] = useState("");
  const [day4Temp, setDay4Temp] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`
      );
      setTemperature(response.data.current.temp_c + "°C");
      setCondition(response.data.current.condition.text);
      setHumidity(response.data.current.humidity + "%");
    } catch (err) {
      console.log(err.message);
    }
  };

  const moreForecast = async () => {
    try {
      const responseF = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${city}&days=5&aqi=no&alerts=no`
      );

      setDay2(responseF.data.forecast.forecastday[1].date);
      setDay3(responseF.data.forecast.forecastday[2].date);
      setDay4(responseF.data.forecast.forecastday[3].date);
      setDay2Temp(
        " - Temperature: " +
          responseF.data.forecast.forecastday[1].day.avgtemp_c +
          " °C"
      );
      setDay3Temp(
        " - Temperature: " +
          responseF.data.forecast.forecastday[2].day.avgtemp_c +
          " °C"
      );
      setDay4Temp(
        " - Temperature: " +
          responseF.data.forecast.forecastday[3].day.avgtemp_c +
          " °C"
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div id="weather">
      <h1>Weather Forecast</h1>
      <input onChange={handleChange} />
      <br />
      <button className="button-85" onClick={fetchData}>
        Get weather forecast
      </button>
      <div>
        <p>Temperature now: {temperature}</p>
        <p>Condition: {condition}</p>
        <p>Humidity: {humidity}</p>
        <br />
        <p>Get forecast for the next days:</p>
        <button className="button-85" onClick={moreForecast}>
          More info
        </button>

        <p>
          {day2} {day2Temp}
        </p>
        <p>
          {day3} {day3Temp}
        </p>
        <p>
          {day4}
          {day4Temp}
        </p>
      </div>
    </div>
  );
};

export default Weather;
