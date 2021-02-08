// FLATTEN ARRAY  FUNCTION
const flatten = (arr) => {
  let flat = arr.reduce((total, cur) => {
    if (Array.isArray(cur)) {
      return total.concat(flatten(cur));
    }
    return total.concat(cur);
  }, []);

  return flat;
};

module.exports = flatten;
