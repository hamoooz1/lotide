const tail = function(array) {
  let tails = [];

  for (let i = 1; i < array.length; i++) {
    tails.push(array[i]);
  }
  console.log(tails);
};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


const result = ["Hello", "Lighthouse", "Labs"];

tail(result);

assertEqual(result.length, 3);
