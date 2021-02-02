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

// FLATTEN ARRAY  FUNCTION

const flatten = (arr) => {
  // Only handles one level of nested arrays.
  let flatArray = [];
  for (const el of arr) {
    if (Array.isArray(el)) {
      // If the element is indeed an array loop through and push into the new array.
      for (let i = 0; i < el.length; i++) {
        flatArray.push(el[i]);
      }
    } else {
      flatArray.push(el);
    }
  }
  return flatArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
