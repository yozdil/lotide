// EQUAL ARRAYS FUNCTION

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (!eqArrays(arr1[i], arr2[i])) {
      return false;
    }
  }
  return true;
};

// TEST CODE


eqArrays([[2, 3], [4]], [[2, 3], [4]]) // => true

eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]) // => false
eqArrays([[2, 3], [4]], [[2, 3], 4]) // => false