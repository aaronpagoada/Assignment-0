function sumOfAllOddNumbers(nums){
  let countOfOddNums = 0;

  for(let i = 0; i < nums.length; i++){
    if(nums[i] % 2 == 1){
      countOfOddNums++;
    }
  }

  return countOfOddNums;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;