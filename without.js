const without = (source, itemsToRemove) => {
  let withoutArray = [...source];
  withoutArray.filter((val, i) => {
    for (let item of itemsToRemove) {
      if (val === item) {
        withoutArray.splice(i, 1);
      }
    }
  });
  return withoutArray;
};

without([1, 2, 3], [1]); //?
without(["1", "2", "3"], [1, 2, "3"]); //?

module.exports = without;
