// ASSERT EQUAL OBJECTS FUNCTION
const assertEqualObjects = function(obj1, obj2) {
  const inspect = require("util").inspect;
  const eqObjects = require("./eqObjects");
  if (eqObjects(obj1, obj2)) {
    console.log(
      `✅️✅️✅️Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`
    );
  } else {
    console.log(
      `❗️❗️❗️Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`
    );
  }
};

module.exports = assertEqualObjects;
