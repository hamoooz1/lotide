const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

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

module.exports = middle;