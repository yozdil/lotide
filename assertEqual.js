// ASSERT EQUAL FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❗️❗️❗️Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// TEST CODE
console.assert(sum(1, 2) === 3);
console.assert(sum(1, 20) === 3); // bad / incorrect assertion, and we see it fail!