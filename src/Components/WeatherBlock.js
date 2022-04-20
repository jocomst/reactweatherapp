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
  //api call function
  const weatherCall = async ({ zipCode }) => {
    try {
      const rawData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${key}`
      );
      const parsedData = await rawData.json();
      getData(parsedData);
    } catch (e) {
      console.error(new Error(e));
    }
  };

  return (
    <div className="weather-box">
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
            <WeatherDisplay data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherBlock;
