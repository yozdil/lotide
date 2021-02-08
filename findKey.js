// FIND KEY FUNCTION
const findKey = (obj, callback) => {
  for (const [key, val] of Object.entries(obj)) {
    if (callback(val)) {
      return key;
    }
  }
};

module.exports = findKey;
