const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function (array1, array2) {
  let array = true;

  if (array1.length !== array2.length) {
    array = false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] != array2[i]) {
      array = false;
    }
  }
  if (array) {
    console.log("✔✔ Assertion Passed");
  } else { 
    console.log("❌ Assertion Failed");
  }
}

const middle = function (array) {
  let middles = [];

  if (array.length === 1 || array.length === 2) {
    return middles;
  }

  if (array.length % 2 !== 0) {
      middles.push(array[(array.length - 1) / 2]);
  } else {
    middles.push(array[(array.length / 2) - 1])
    middles.push(array[(array.length) / 2]);
  }

  return middles;
}

console.log(middle([1, 2, 3, 4, 5, 6])) // => [2]
console.log(middle([1, 2, 3, 4, 5]))