const assertEqual = require("../asserEqual.js");
const eqArrays = require("../eqArrays.js");

// TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 