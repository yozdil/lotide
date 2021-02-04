// TAKE UNTIL FUNCTION

const takeUntil = (array, callback) => {
  // Array map(callback) returns an array of bunch of false and true. IndexOf
  // returns the first instance we have a true
  let indexUntil = array.map(callback).indexOf(true);
  // We can there for slice our array from beginning to the first occurrence of
  // the true value
  return array.slice(0, indexUntil);
};

// TEST CASES

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);
