const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

describe("#eqObjects", () => {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const abc = { a: "1", b: "2", c: "3" };

  it("returns true for ab = { a: '1', b: '2' } & { b: '2', a: '1' }", () => {
    assert.deepEqual(eqObjects(ab, ba), true);
  });
  it("returns true for ab = { a: '1', b: '2' } & { a: '1', b: '2', c: '3' }", () => {
    assert.deepEqual(eqObjects(ab, abc), false);
  });
});