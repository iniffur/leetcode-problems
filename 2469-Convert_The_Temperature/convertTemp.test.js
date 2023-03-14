const {
  convertTemperatures,
  convertToKelvin,
  convertToFahrenheit,
} = require("./convertTemp");

describe("convertTemp", () => {
  it("can convert a temperature from celsius to kelvin", () => {
    expect(convertToKelvin(36.5)).toEqual(309.65);
  });
});
