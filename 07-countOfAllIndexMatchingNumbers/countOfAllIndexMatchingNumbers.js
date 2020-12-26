function countOfAllIndexMatchingNumbers(nums){
  let countOfIndexMatch = 0;
  
  for(let i = 0; i < nums.length; i++){
    if(nums[i] == i){
      countOfIndexMatch++;
    }
  }

  return countOfIndexMatch;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;