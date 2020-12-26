function setUnionOfAnyAmountOfSets(...args){
  finalSet = new Set();

  for(let i = 0; i < args.length; i++){
    for(let j of args[i]){
      finalSet.add(j);
    }
  }

  return finalSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;