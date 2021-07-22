BalancePoint.js
/* 
  Balance Point
  Write a function that returns whether the given
  array has a balance point BETWEEN indices, 
  where one side’s sum is equal to the other’s. 
*/

const nums1 = [1, 2, 3, 4, 10];
const expected1 = true;
// Explanation: between indices 3 & 4

const nums2 = [1, 2, 4, 2, 1];
const expected2 = false;

function balancePoint(nums) {
  var len = nums.length;

  // Edge case
  if (len < 2) return false;

  // SETUP
  var leftSum = nums[0];
  var rightSum = 0;

  // WORK
  for (var i = 1; i < len; i++) {
    rightSum += nums[i];
  }

  for (var i = 1; i < len; i++) {
    if (leftSum === rightSum) return true;

    rightSum -= nums[i];
    leftSum += nums[i];
  }

  // RETURN
  return false;
}