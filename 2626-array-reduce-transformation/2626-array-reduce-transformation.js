/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
  let answer = init;
  nums.forEach((item) => {
    answer = fn(answer, item);
  })
  
  return answer;
};