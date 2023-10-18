const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {
  let object = {};

  for (let i = 0; i < string.length; i++) {
      if (string[i] === ' ') {
        i++;
      }
      if (object[string[i]] === undefined) {
        object[string[i]] = 1;
      } else {
        object[string[i]]++;
      }
  }
  return object;
}


console.log(countLetters("hello my name is hamza"));