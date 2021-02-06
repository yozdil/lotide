// EQUAL OBJECTS FUNCTION
const eqObjects = (obj1, obj2) => {
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

  // If the objects do not have the same amount of keys return false, they
  // cannot be equal.
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  } else {
    for (const key of Object.keys(obj1)) {
      // If the values for the key are not the same for both objects
      if (obj1[key] !== obj2[key]) {
        // Is it an Array?
        if (Array.isArray(obj1[key])) {
          // Return the variable that takes the result of eqArrays function.
          if (!eqArrays(obj1[key], obj2[key])) {
            return false;
          }
        } else if (
          // So it's not an array but are both values still an object?
          typeof obj1[key] === "object" &&
          typeof obj2[key] === "object"
        ) {
          if (!eqObjects(obj1[key], obj2[key])) {
            return false;
          }
        } else {
          // It is not an array nor an object then the primitive values are not equal to each
          // other.
          return false;
        }
      }
    }
    return true;
  }
};

// TEST CASES

console.log(
  eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => true
);
console.log(
  eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => false
);
console.log(
  eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }) // => false
);


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false