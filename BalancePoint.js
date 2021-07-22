
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
  var length = nums.length
  // Edge case
  if(nums.length < 2) return false;

  var leftSum = nums[0];
  var rightSum = 0;

  for(var i = 1; i < length; i++) {
    rightSum += nums[i];
  }
  
  for(var i = 1; i < length; i++) {
    if(leftSum === rightSum) return true;
    
    leftSum += nums[i];
    rightSum -= nums[i];
  }
  return false;
}

console.log(balancePoint(nums1));
console.log(balancePoint(nums2));