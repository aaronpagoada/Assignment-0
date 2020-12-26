function countOfAllBooleans(arr){
  let booleanCount = 0;
  
  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] == "boolean"){
      booleanCount++;
    }
  }

  return booleanCount;
}

// Do not edit this line;
module.exports = countOfAllBooleans;