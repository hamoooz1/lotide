const eqArrays = require("./eqArrays.js");

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

module.exports = assertArraysEqual;