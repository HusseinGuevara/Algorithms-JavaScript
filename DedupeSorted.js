/* 
Given a SORTED array of integers, dedupe the array 
Because array elements are already in order, all duplicate values will be grouped together.
Ok to use a new array
Bonus: do it in O(n) time (no nested loops, new array ok)
*/

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expected3 = [1, 2, 3, 4];

const nums4 = [1, 1, 1, 2, 2, 3, 4, 5, 45, 45, 7, 9]
const expected4 = [1, 2, 3, 4, 5, 45, 7, 9]

function dedupeSorted(nums) {
    var length = nums.length;
    var newArray = [];
    for(var i = 0; i < length; i++) {
        if(nums[i] !== nums[i+1]) {
            newArray.push(nums[i]);
        }
        // console.log(nums[i+1]);
    }
    return newArray;
}
console.log(dedupeSorted(nums1));
console.log(dedupeSorted(nums2));
console.log(dedupeSorted(nums3));
console.log(dedupeSorted(nums4));