/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
  nums.sort((x, y) => x - y);
  let caseArr = [];
  let len = nums.length;
  if(len <= 4) return 0;
  for(let i = 0; i < len - 1; i++){
    caseArr.push(nums[len - i - 1] - nums[3 - i]);
  }

  // let i = 2;
  // while(i >= 0){
  //   nums[len - i - 1] = nums[0];
  //   i --;
  // }

  // console.log(nums);

  // return Math.max(...nums) - nums[0];
  return Math.min(...caseArr);
    
};