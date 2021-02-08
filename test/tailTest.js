const tail = require('../tail');
const assertEqual = require('../assertEqual');

// TEST CODE

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
console.log(words);
assertEqual(words.length, 3); // original array should still have 3 elements!