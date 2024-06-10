/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  let count = 0;
  let beforeHeights = heights.map(x => x);
  heights.sort((x, y) => x - y);
  for(let i = 0; i < heights.length; i ++){
    heights[i] !== beforeHeights[i] && count ++;
  }
  return count;
    
};