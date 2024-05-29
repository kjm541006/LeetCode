/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
  let answer = [];
  arr.forEach((item, i) => {
    if(fn(item, i)){
      answer.push(item);
    }
  })
  return answer;
};