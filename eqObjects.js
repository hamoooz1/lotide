// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const assertEquals = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
};

const eqObjects = function(object1, object2) {
  const array1 = Object.keys(object1);
  const array2 = Object.keys(object2);

  if (array1.length !== array2.length) {
    return false;
  }

  for (const item of array1) {
    if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
      if (!eqArrays(object1[item], object2[item])) {
        return false;
      }
    } else {
      if (object1[item] !== object2[item]) {
        return false;
      }
    }
  }

  return true;
};

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

assertEquals(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
assertEquals(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);