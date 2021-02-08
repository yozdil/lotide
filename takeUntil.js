// TAKE UNTIL FUNCTION

const takeUntil = (array, callback) => {
  // Array map(callback) returns an array of bunch of false and true. IndexOf
  // returns the first instance we have a true
  let indexUntil = array.map(callback).indexOf(true);
  // We can there for slice our array from beginning to the first occurrence of
  // the true value
  return array.slice(0, indexUntil);
};
module.exports = takeUntil;
