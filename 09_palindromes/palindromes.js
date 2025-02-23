// # Exercise 09 - Palindromes

// Write a function that determines whether or not a given string is a palindrome.

// A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks:

// ### some palindromes:
//   - A car, a man, a maraca.
//   - Rats live on no evil star.
//   - Lid off a daffodil.
//   - Animal loots foliated detail of stool lamina.
//   - A nut for a jar of tuna.

// ```javascript
// palindromes('racecar') // true
// palindromes('tacos') // false
// ```

const palindromes = function (sentence) {
  let myRegex = /[a-zA-Z0-9]+/g;
  let straightLetters = sentence
    .toLowerCase()
    .match(myRegex)
    .join("")
    .split("");
  let reversedLetters = [...straightLetters].reverse(); //we clone the array straightLetters
  return straightLetters.every(
    (value, index) => straightLetters[index] == reversedLetters[index]
  );
};

// Do not edit below this line
module.exports = palindromes;
