/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {};
    for(let i = 0; i < nums.length; i++){
        const other = target - nums[i];
        
        if(other in map){
            console.log(map[other]);
            return [map[other], i];
        }
        
        map[nums[i]] = i;
    }
};