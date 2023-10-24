const tail = function(array) {
  let tails = [];

  for (let i = 1; i < array.length; i++) {
    tails.push(array[i]);
  }
 
  return tails.length;
};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


const result = ["Hello", "Lighthouse", "Labs"];

// assertEqual(tail(result), 2)

module.exports = tail;
