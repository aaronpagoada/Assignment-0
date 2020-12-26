function countOfAllBooleansAndStrings(arr){
  let booleanAndStringCount = 0;
  
  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] == "boolean" || typeof arr[i] == "string"){
      booleanAndStringCount++;
    }
  }

  return booleanAndStringCount;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;