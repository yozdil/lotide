const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail", () => {
  const words = ['Yo Yo', 'Lighthouse', 'Labs'];
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
  it("doesn't modify the original array", () => {
    assert.strictEqual(words.length, 3);
  });
});
