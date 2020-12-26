function frequencyCounter(word){
  let kvMap = {};

  word.split('').forEach(function frequency(w){
    kvMap[w] ? kvMap[w]++ : kvMap[w] = 1;
  });

  return kvMap;
}

// Do not edit this line;
module.exports = frequencyCounter;