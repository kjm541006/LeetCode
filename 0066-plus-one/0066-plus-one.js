/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let num = BigInt(digits.join("")) + 1n;
  let str = num.toString();
  let arr = str.split("");
  arr.map(x => {
    Number(x);
  })

  return arr;
};