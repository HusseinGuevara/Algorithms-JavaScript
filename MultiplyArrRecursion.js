/*
Multiply the numbers in the array using recusion
*/ 

const nums1 = [1, 2, 3];
const expect1 = [6];

function multArr(nums) {
    // BASE CASE - where should the funtion stop
    if(nums.length < 1) return 1;
    console.log(nums);

    // FORWARD PROGRESS
    newArr = nums.slice(1, nums.length);
    // console.log(newArr);

    // RECURSIVE CALL
    return nums[0] * multArr(newArr);
}
console.log(multArr(nums1));
