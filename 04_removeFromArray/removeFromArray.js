const removeFromArray = function (
  originalArray,
  firstRemovedElement,
  ...otherRemovedElements
) {
  let elementsToErase = [firstRemovedElement, otherRemovedElements].flat();
  let cleanArray = [];
  for (let element of originalArray) {
    if (!elementsToErase.includes(element)) {
      cleanArray.push(element);
    }
  }

  return cleanArray;
};

// Do not edit below this line
module.exports = removeFromArray;
