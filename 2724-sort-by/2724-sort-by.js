/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
  function compareXY(a, b){
    return a < b ? -1 : 1;
  }
  return arr.sort((a, b) => compareXY(fn(a), fn(b)));
    
};