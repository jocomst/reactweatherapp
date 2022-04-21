export const toCelsius = (temp) => {
  const newTempC = temp - 273;
  return newTempC.toFixed(2) + "°C";
};

export const currentConditions = (data) => {
  const conditions = data.weather[0].description;
  return `${conditions}, ${data.main.humidity}% humidity`;
};

export const toFahreinheit = (temp) => {
  const newTemp = ((temp - 273) * 9) / 5 + 32;
  return newTemp.toFixed(2) + "°F";
};
