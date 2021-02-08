// EQUAL ARRAYS FUNCTION

// EQ ARRAYS FUNCTION
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      if (Array.isArray(arr1[i])) {
        return eqArrays(arr1[i], arr2[i]);
      }
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;