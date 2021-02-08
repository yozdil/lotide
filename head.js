const assertEqual = require("./assertEqual");

// The head function
const head = (array) => array[0];

// TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
