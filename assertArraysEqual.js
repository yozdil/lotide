// EQUAL ARRAYS FUNCTION
const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr2[i] !== arr1[i]) {
      return false;
    }
  }
  return true;
};

// EQUAL ARRAYS ASSERTION FUNCTION

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅️✅️✅️Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`❗️❗️❗️Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

// TEST CODE

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, "a", 3], [1, 5, 3]);