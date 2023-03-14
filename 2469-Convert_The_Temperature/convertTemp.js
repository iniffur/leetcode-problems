const convertTemperatures = (celsius) => {
  checkTemperatureRange(celsius);
  return [convertToKelvin(celsius), convertToFahrenheit(celsius)];
};

const convertToKelvin = (celsius) => {
  let kelvinTemp = celsius + 273.15;
  return kelvinTemp;
};

const convertToFahrenheit = (celsius) => {
  let fahrenheitTemp = celsius * 1.8 + 32;
  return fahrenheitTemp;
};

const checkTemperatureRange = (celsius) => {
  if (celsius < 0 || celsius > 1000) {
    throw new Error("Error: Invalid Temperature");
  }
};

module.exports = { convertTemperatures, convertToKelvin, convertToFahrenheit };
