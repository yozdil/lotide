const without = (source, itemsToRemove) => {
  // We use the spread operator to copy the first array that the values will be
  // removed from.
  let withoutArray = [...source];
  // In a nested for loop we iterate through each array to take out the values
  // existing in the second array from the first array
  for (let i = source.length - 1; i > -1; i--) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        withoutArray.splice(i, 1);
      }
    }
  }
  return withoutArray;
};
module.exports = without;
