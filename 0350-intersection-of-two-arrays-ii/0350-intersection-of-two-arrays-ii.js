/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let result = [];
  let countMap = {};
  if (nums1.length <= nums2.length) {
      for (let num of nums1) {
          countMap[num] = (countMap[num] || 0) + 1;
      }
  } else {
      for (let num of nums2) {
          countMap[num] = (countMap[num] || 0) + 1;
      }
  }

  for (let num of (nums1.length <= nums2.length ? nums2 : nums1)) {
      if (countMap[num]) {
          result.push(num);
          countMap[num]--;
      }
  }

  return result;
};