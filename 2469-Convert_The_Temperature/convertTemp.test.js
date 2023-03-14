const {
  convertTemperatures,
  convertToKelvin,
  convertToFahrenheit,
} = require("./convertTemp");

describe("convertTemp", () => {
  it("can convert a temperature from celsius to kelvin", () => {
    expect(convertToKelvin(36.5)).toEqual(309.65);
  });

  it("can convert a temperature from celsius to Fahrenheit", () => {
    expect(convertToFahrenheit(36.5)).toEqual(97.7);
  });
});
