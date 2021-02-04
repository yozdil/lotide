//  THE MAP FUNCTION

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//  TEST CASES
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, (word) => word[0]);
console.log(results1);

// EQUAL ARRAYS ASSERTION FUNCTION
const assertArraysEqual = (arr1, arr2) => {
  // EQUAL ARRAYS FUNCTION
  const eqArrays = (arr1, arr2) => {
    if (arr1.length === arr2.length) {
      for (let i = 0; i < arr1.length; i++) {
        if (arr2[i] !== arr1[i]) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  };

  if (eqArrays(arr1, arr2)) {
    console.log(`✅️✅️✅️Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`❗️❗️❗️Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

// TEST CODE
assertArraysEqual(
  map(words, (word) => word[0]),
  ["g", "c", "t", "m", "t"]
);
