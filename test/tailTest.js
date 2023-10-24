const tail = require("../tail");
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns 2 === 2", () => {
    assert.strictEqual(tail( ["Hello", "Lighthouse", "Labs"]), 2);
  });
});