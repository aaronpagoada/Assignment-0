function pairSum(nums, target){
  if(nums.length <= 1){
    throw new Error('ERROR: Array length must be greater than 1!');
  }else{
    for(let i = 0; i < nums.length; i++){
      for(let j = 0; j < nums.length; j++){
        if(nums[i] + nums[j] == target && i != j){
          return true;
        }
      }
    }

    return false;
  }
}

// Do not edit this line;
module.exports = pairSum;