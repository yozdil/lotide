const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    // We do not want to count anything for whitespace.
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        // If results[sentence[i]] is not undefined (so already had an index
        // value in it), we will push the following index inside.
        results[sentence[i]].push(i);
      } else {
        // If not set it equal to the current index so we can push other indexes
        // afterwards, where we come across the same character (key).
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));
