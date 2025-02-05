const convertToCelsius = function (tempInFarenheit) {
  let notRoundedTemp = (5 / 9) * (tempInFarenheit - 32);
  // if the result is integer, toFixed adds a decimal place (0 = 0.0), so we won't pass the calculation
  if (Number.isInteger(notRoundedTemp)) return (celsiusTemp = notRoundedTemp);
  //toFixed returns a string
  else return Number((celsiusTemp = notRoundedTemp.toFixed(1)));
};

const convertToFahrenheit = function (tempInCelsius) {
  let notRoundedTemp = (9 / 5) * tempInCelsius + 32;
  if (Number.isInteger(notRoundedTemp)) return (farenheitTemp = notRoundedTemp);
  else return Number((farenheitTemp = notRoundedTemp.toFixed(1)));
};

// console.log(convertToCelsius(-100));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
