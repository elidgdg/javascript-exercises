const convertToCelsius = function(farenheitTemperature ){
  return Math.round(((farenheitTemperature - 32) * (5/9)) * 10) / 10;
};

const convertToFahrenheit = function(celciusTemperature) {
  return Math.round((celciusTemperature * (9/5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
