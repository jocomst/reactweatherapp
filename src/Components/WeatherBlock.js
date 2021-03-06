import React from "react";
import { useState, useEffect } from "react";
import WeatherDisplay from "./WeatherDisplay";
import ThreeDayForeCast from "./ThreeDayForecast";
import "./App.css";

const WeatherBlock = (props) => {
  //api key
  const key = "9ac38d24b1f89311924a4ecaa72ba987";
  // states for getting and setting data
  const [data, getData] = useState([]);
  //states for zipcode input
  const [zipCode, setZip] = useState("");
  //state for daily forecast
  const [daily, setDaily] = useState();
  // state for celsius
  const [isCelsius, setDegree] = useState(false);
  //api call function
  const weatherCall = async ({ zipCode }) => {
    try {
      const rawData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${key}`
      );
      const parsedData = await rawData.json();
      getData(parsedData);

      console.log(parsedData);
      const { lat, lon } = parsedData.coord;
      const castData = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}`
      );
      const parsedCast = await castData.json();
      setDaily(parsedCast);
    } catch (e) {
      console.error(new Error(e));
    }
  };

  return (
    <div className="weather-box">
      <div className="mini-container">
        <ThreeDayForeCast
          data={daily}
          isCelsius={isCelsius}
          setDegree={setDegree}
        />
      </div>
      <div className="container">
        <div>
          <h2>Search by zipcode</h2>
          <input
            type="text"
            id="zip"
            name="zip"
            value={zipCode}
            onChange={(e) => setZip(e.target.value)}
          />
          <button onMouseDown={() => weatherCall({ zipCode })}>Search</button>
          <div>
            <WeatherDisplay
              data={data}
              isCelsius={isCelsius}
              setDegree={setDegree}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherBlock;
