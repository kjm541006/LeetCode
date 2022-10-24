/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const len = nums.length;
    const sum = nums.reduce((acc, cur) => acc + cur, 0);
    console.log(sum);
    let left = 0;
    for(let i = 0; i < len; i++){
        const right = sum - left - nums[i];
        if(left === right){
            return i;
        }
        left += nums[i];
    }
    return -1;
};