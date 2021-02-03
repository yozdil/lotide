const countLetters = (str) => {
  // First we get rid of all the white space in our string as we do not want to
  // count them
  let chars = str.split(" ").join("");
  let letterCount = {};

  for (let i = 0; i < chars.length; i++) {
    // Iterate through the string: if the specific character already had a value
    // increase it.
    if (letterCount[chars[i]]) {
      letterCount[chars[i]]++;
      // If not set it equal to 1 so we can increase if there is another
      // instance where we come across the same character (key).
    } else {
      letterCount[chars[i]] = 1;
    }
  }
  return letterCount;
};

console.log(countLetters("lighthouse in the house"));
