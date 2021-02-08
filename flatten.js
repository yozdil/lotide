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

module.exports = flatten;
