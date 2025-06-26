/**
 * LeetCode #1: Two Sum
 * https://leetcode.com/problems/two-sum/
 *
 * 시간복잡도: O(n)
 */

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
};
