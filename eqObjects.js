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

  const keys = Object.keys(obj1);
  // If the objects do not have the same amount of keys return false, they
  // cannot be equal.
  if (keys.length !== Object.keys(obj2).length) {
    return false;
  } else {
    for (const key of keys) {
      // If the values for the key are not the same for both objects
      if (obj1[key] !== obj2[key]) {
        // Is it an Array?
        if (Array.isArray(obj1[key])) {
          // Return the variable that takes the result of eqArrays function.
          const x = eqArrays(obj1[key], obj2[key]);
          if (!x) {
            return false;
          }
        } else {
          // It is not an array then the primitive values are not equal to each
          // other.
          return false;
        }
      }
    }
  }
  return true;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
