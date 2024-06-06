/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
  let ansArr = [];
  let length = arr.length;
  for(let i = 0; i < length; i++){
    if(arr.length === 0) continue;
    ansArr.push(arr.splice(i, size));
    i --;
    length --;
  }
  return ansArr;
};
