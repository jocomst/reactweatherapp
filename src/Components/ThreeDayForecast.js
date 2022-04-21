import "./App.css";
import React from "react";
import { useState } from "react";
import MiniCast from "./MiniCast";

const ThreeDayForeCast = ({ data, isCelsius }) => {
  if (data) {
    const cutCast = data.daily.slice(1, 4);

    return cutCast.map((el, i) => {
      return <MiniCast key={i} element={el} isCelsius={isCelsius} />;
    });
  }
};

export default ThreeDayForeCast;
