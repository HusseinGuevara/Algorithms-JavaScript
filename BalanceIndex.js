/* 
Balance Index
Here, a balance point is ON an index, not between indices.
Return the balance index where sums are equal on either side
(exclude its own value).

Return -1 if none exist.
*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

function balanceIndex(nums) {
    var len = nums.length;

    // EDGE CASE
    if (len <= 2) return -1;

    var leftSum = nums[0];
    var rightSum = 0;

    for (var i = 2; i < len; i++) {
        rightSum += nums[i];
    }

    for (var i = 2; i < len; i++) {
        if (leftSum === rightSum) return i;
        rightSum -= nums[i + 1];
        leftSum += nums[i];
    }

    return -1;
}
console.log(balanceIndex(nums1));
console.log(balanceIndex(nums2));