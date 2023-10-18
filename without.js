const without = function (source, takeaway) {
  let basket = [];
  for (let i = 0; i < source.length; i++) {
    let candy = false;
    for (let j = 0; j < takeaway.length; j++) {
      if (source[i] === takeaway[j]) {
        candy = true;
        break;
      }
    }
    if (!candy) {
      basket.push(source[i])
    }
  }
  return basket;
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


console.log(without([1, 2, 3], [1, 2])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

let words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); 