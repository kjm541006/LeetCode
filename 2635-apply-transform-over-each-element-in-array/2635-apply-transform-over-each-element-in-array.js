/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  let answer = [];
  arr.forEach((item, i) => {
    answer.push(fn(item, i));
  });
  return answer;
};