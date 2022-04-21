import React from "react";
import { toCelsius, toFahreinheit, currentConditions } from "./helpers";
import "./App.css";

const MiniCast = ({ element, isCelsius }) => {
  console.log(element);
  const date = new Date(element.dt * 1000).toLocaleString().split(",")[0];
  return (
    <>
      <div>
        <p>{date}</p>
        <p>
          {isCelsius
            ? `Avg. temp: ${toFahreinheit(element.temp.day)}`
            : `Avg. temp: ${toCelsius(element.temp.day)}`}
        </p>
        <p>{element.weather[0].description}</p>
      </div>
    </>
  );
};

export default MiniCast;
