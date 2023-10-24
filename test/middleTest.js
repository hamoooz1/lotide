const middle = require("../middle");
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});
//Test Code
//console.log(middle([1, 2, 3, 4, 5, 6])) // => [2]
//console.log(middle([1, 2, 3, 4, 5]))