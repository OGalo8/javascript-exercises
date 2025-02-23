// # Exercise 10 - Fibonacci

// Create a function that returns a specific member of the Fibonacci sequence:

// > A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers.
// > In this exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.
// > To learn more about Fibonacci sequences, go to: https://en.wikipedia.org/wiki/Fibonacci_sequence

// ```javascript
// fibonacci(4); // returns the 4th member of the series: 3  (1, 1, 2, 3)
// fibonacci(6); // returns 8
// ```

const fibonacci = function (n) {
  let num = Number(n);
  if (num < 0) return "OOPS";
  if (num == 0) return 0;
  if (num == 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
};

// // Do not edit below this line
module.exports = fibonacci;
