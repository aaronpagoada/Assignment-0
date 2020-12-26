class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target){
    let min = 0, max = nums.length - 1;

    while(min <= max){
      let mid = Math.floor((min + max) / 2);

      if(nums[mid] == target){
        return true;
      }else if(nums[mid] < target){
        min = mid + 1;
        this.binarySearch(min, target)
      }else if(nums[mid] > target){
        max = mid - 1;
        this.binarySearch(max, target)
      }
    }

    return this.flag;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;