function sumOfAllEvenNumbers(nums){
  let countOfEvenNums = 0;

  for(let i = 0; i < nums.length; i++){
    if(nums[i] % 2 == 0){
      countOfEvenNums++;
    }
  }

  return countOfEvenNums;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;