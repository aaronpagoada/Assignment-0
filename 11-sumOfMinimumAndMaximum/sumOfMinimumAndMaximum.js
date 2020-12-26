function sumOfMinimumAndMaximum(nums){
  let min = 0, max = 0;
  let tempMin = nums[0], tempMax = nums[0];

  for(let i = 0; i < nums.length; i++){
    if(nums[i] > tempMax){
      tempMax = nums[i];
    }

    if(nums[i] < tempMin){
      tempMin = nums[i];
    }
  }

  max = tempMax;
  min = tempMin;

  return (max + min);
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;