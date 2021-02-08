// MIDDLE FUNCTION
const middle = (array) => {
  let middleVal = [];
  if (array.length < 3) {
    return middleVal;
  } else {
    if (array.length % 2 !== 0) {
      middleVal.push(array[Math.floor(array.length / 2)]);
    } else {
      middleVal.push(array[array.length / 2 - 1], array[array.length / 2]);
    }
  }

  return middleVal;
};

module.exports = middle;
