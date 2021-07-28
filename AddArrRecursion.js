/* 
Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

function sumArr(nums) {
    // EDGE CASE
    if(nums.length < 2) return nums[0];
    console.log(nums);

    // FORWARD PROGRESS 
    newArr = nums.slice(1, nums.length);

    // RECURSION CALL 
    return nums[0] + sumArr(newArr);

}
console.log(sumArr(nums1));