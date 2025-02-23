const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((accumulator, current) => accumulator + current, 0);
};

const multiply = function (array) {
  return array.reduce((accumulator, current) => accumulator * current, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  if (a == 0) return 1;
  let factors = [];
  for (let i = a; i > 0; i--) {
    factors.push(i);
  }
  return multiply(factors);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
