const assert = require("chai").assert;
const countLetters = require("../countLetters");

describe("#countLetters", () => {
  it("returns 20 for 'lighthouse in the house'", () => {
    assert.strictEqual(countLetters("lighthouse in the house"), 20);
  });
});
