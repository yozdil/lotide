// ASSERT EQUAL FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❗️❗️❗️Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const tail = (array) => {
  let result = new Array();
  for (const element of array) {
    result.push(element);
  }
  return result.splice(1);
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
console.log(words);
assertEqual(words.length, 3); // original array should still have 3 elements!
