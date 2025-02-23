const findTheOldest = function (array) {
  let currentYear = new Date().getFullYear();
  let sortedPersons = array.sort((first, second) => {
    let firstAge = (first.yearOfDeath || currentYear) - first.yearOfBirth;
    let secondAge = (second.yearOfDeath || currentYear) - second.yearOfBirth;
    return secondAge - firstAge;
  });
  return sortedPersons[0];
};

// Do not edit below this line
module.exports = findTheOldest;
