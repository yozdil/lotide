// FIND KEY BY VALUE FUNCTION

const findKeyByValue = (obj, val) => {
  for (const key in obj) {
    if (obj[key] === val) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

findKeyByValue(bestTVShowsByGenre, "The Wire");
findKeyByValue(bestTVShowsByGenre, "That '70s Show");
