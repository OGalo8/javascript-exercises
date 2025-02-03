const reverseString = function (word) {
  let reversedWord = "";
  for (let letterIndex = word.length - 1; letterIndex >= 0; letterIndex--) {
    reversedWord += word.at(letterIndex);
  }
  return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
