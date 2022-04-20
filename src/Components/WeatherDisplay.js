import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";

const WeatherDisplay = ({ data }) => {
  const [city, setCity] = useState();
  const [tempObj, setTempArr] = useState({});
  const [isCelsius, setDegree] = useState(false);

  useEffect(() => {
    setCity(data.name);
  });

  const calculateTemps = (data) => {
    const { feels_like, humidity, pressure, temp, temp_max, temp_min } =
      data.main;
    return `Current: ${
      isCelsius ? toFahreinheit(temp) : toCelsius(temp)
    }, High: ${
      isCelsius ? toFahreinheit(temp_max) : toCelsius(temp_max)
    }, Low: ${isCelsius ? toFahreinheit(temp_min) : toCelsius(temp_min)}`;
  };

  const toFahreinheit = (temp) => {
    const newTemp = ((temp - 273) * 9) / 5 + 32;
    return newTemp.toFixed(2) + "°F";
  };

  const toCelsius = (temp) => {
    const newTempC = temp - 273;
    return newTempC.toFixed(2) + "°C";
  };
  const currentConditions = (data) => {
    const conditions = data.weather[0].description;
    return `${conditions}, ${data.main.humidity}% humidity`;
  };

  if (data.name) {
    return (
      <>
        <div className="flex-only">
          <h3>{city}</h3>
          <button onClick={() => setDegree(!isCelsius)}>
            <h3>C/F</h3>
          </button>
        </div>
        <h4>{new Date().toISOString()}</h4>
        <p>{calculateTemps(data)}</p>
        <p>Description: {currentConditions(data)}</p>
      </>
    );
  }
};

export default WeatherDisplay;
