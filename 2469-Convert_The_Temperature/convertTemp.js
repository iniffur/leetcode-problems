const convertTemperatures = () => {
  convertToKelvin();
};

const convertToKelvin = (celsius) => {
  let kelvinTemp = celsius + 273.15;
  return kelvinTemp;
};

const convertToFahrenheit = (celsius) => {
  let fahrenheitTemp = celsius * 1.8 + 32;
  return fahrenheitTemp;
};

module.exports = { convertTemperatures, convertToKelvin, convertToFahrenheit };
