const removeFromArray = function (
  originalArray,
  firstRemovedElement,
  ...otherRemovedElements
) {
  //we use flat because elementsToErase will be an array that contains at least one other array (otherRemovedElements).
  let elementsToErase = [firstRemovedElement, otherRemovedElements].flat();
  let cleanArray = [];
  for (let element of originalArray) {
    if (!elementsToErase.includes(element)) {
      // if element IS NOT included in elementsToErase, we push it to cleanArray
      cleanArray.push(element);
    }
  }

  return cleanArray;
};

// Do not edit below this line
module.exports = removeFromArray;
