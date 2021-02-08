const assertArraysEqual = require("./assertArraysEqual");

const middle = (array) => {
  let middleVal = [];
  if (array.length >= 3 && array.length % 2 !== 0) {
    middleVal.push(array[Math.floor(array.length / 2)]);
  } else if (array.length >= 3 && array.length % 2 === 0) {
    middleVal.push(array[array.length / 2 - 1], array[array.length / 2]);
  } else {
    return middleVal;
  }
  return middleVal;
};

// TEST CODE

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
