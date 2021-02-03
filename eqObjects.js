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

// EQUAL OBJECTS FUNCTION

const eqObjects = (obj1, obj2) => {
  const keys = Object.keys(obj1);
  // If the objects do not have the same amount of keys return false, they
  // cannot be equal.
  if (keys.length !== Object.keys(obj2).length) {
    return false;
  } else {
    for (const key of keys) {
      if (obj1[key] !== obj2[key]) {
        if (Array.isArray(obj1[key])) {
          const x = eqArrays(obj1[key], obj2[key]);
          console.log(x);
          if (!x) {
            return false;
          }
        } else {
          return false;
        }
      }
    }
  }
  return true;
};

const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
