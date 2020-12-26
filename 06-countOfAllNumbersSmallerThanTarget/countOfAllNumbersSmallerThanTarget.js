function countOfAllNumbersSmallerThanTarget(nums, target){
  let countOfNumsLessThanTarget = 0;
  
  for(let i = 0; i < nums.length; i++){
    if(nums[i] < target){
      countOfNumsLessThanTarget++;
    }
  }

  return countOfNumsLessThanTarget;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;