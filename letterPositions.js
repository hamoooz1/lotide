const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      i++;
    }
    if (results[sentence[i]] === undefined) {
      results[sentence[i]] = [];
    } if (results[sentence[i]] !== undefined) {
      results[sentence[i]].push(i);
    }
  }

  return results;
};

console.log(letterPositions("lighthouse in the house"))