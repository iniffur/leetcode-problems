const convertTemperatures = () => {
  convertToKelvin();
};

const convertToKelvin = (celsius) => {
  let kelvinTemp = celsius + 273.15;
  return kelvinTemp;
};

module.exports = { convertTemperatures, convertToKelvin };
