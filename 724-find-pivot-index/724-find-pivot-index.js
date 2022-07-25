/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let answer = -1;
  let leftArr = [];
  let rightArr = [];
  let originArr = [...nums];

  let returnSum = function (arr) {
    let sum = 0;
    return arr.reduce((prev, currV) => prev + currV, sum);
  };

  for (let i = 0; i < nums.length; i++) {
    leftArr = nums.slice(0, i);
    rightArr = nums.slice(i + 1);
    nums = [...originArr];
    if (returnSum(leftArr) == returnSum(rightArr)) {
      return i;
    }
  }
  return answer;
};