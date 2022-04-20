import "./App.css";
import React from "react";
import { useState } from "react";

const ThreeDayForeCast = ({ data }) => {
  const [castData, setCastData] = useState();

  //   console.log(lon, lat);
  //   const key = "9ac38d24b1f89311924a4ecaa72ba987";
  //   const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}`;

  //   (async () => {
  //     const rawData = await fetch(url);
  //     const data = await rawData.json();
  //     setCastData(data);
  //     console.log(data);
  //   })();
  return (
    <>
      <div>Hello</div>
    </>
  );
};

export default ThreeDayForeCast;
