const sumAll = function (num1, num2) {
  //  We check if the args are not:
  //  - Non-Negative numbers
  //  - Non-integers
  //  - Their type different from "number"
  if (
    ((num1 | num2) < 0) |
    !(Number.isInteger(num1) && Number.isInteger(num2)) |
    !(Number.isFinite(num1) && Number.isFinite(num2))
  )
    return "ERROR";

  let inferiorLimit, superiorLimit;
  if (num1 == num2) {
    return num1;
  } else if (num1 < num2) {
    inferiorLimit = num1;
    superiorLimit = num2;
  } else {
    inferiorLimit = num2;
    superiorLimit = num1;
  }

  let total = 0;
  for (let i = inferiorLimit; i <= superiorLimit; i++) {
    total += i;
  }

  return total;
};

// console.log(sumAll(20, 21));

// Do not edit below this line
module.exports = sumAll;
