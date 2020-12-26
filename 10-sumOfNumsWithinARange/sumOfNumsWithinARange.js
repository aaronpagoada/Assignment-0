function sumOfNumsWithinARange(nums, start, end){
  let countInRange = 0;

  for(let i = 0; i < nums.length; i++){
    if(nums[i] >= start && nums[i] <= end){
      countInRange++;
    }
  }

  return countInRange;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;