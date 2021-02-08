// EQ ARRAYS FUNCTION
const eqArrays = require("./eqArrays");

// EQUAL ARRAYS ASSERTION FUNCTION
const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅️✅️✅️Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`❗️❗️❗️Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

module.exports = assertArraysEqual;
