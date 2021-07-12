/* 
Book Index
Given an arry of ints representing page numbers
return a string with the page numbers formatted as page ranges when the nums span a consecutive range
*/

const nums1 = [1, 13, 14, 15, 37, 38, 70];
const expected1 = "1, 13-15, 37-38, 70";

function bookIndex(nums) {
    // SETUP
    var str = "";

    // WORK
    for (var i = 0; i < nums.length; i++) {
        var j = i + 1;
        while (nums[j] == nums[j - 1] + 1) {
        // nums[2] = 14
        // nums[2 - 1] = 13
        // nums[2] == nums[2 - 1]  + 1
        // 14 ==  13 + 1
        j++;
        }
      // if j is equal to the i + 1, then the next number is not a sequence
        if (j == i + 1) {
        str += nums[i];
        }
      // if j is greater than i + 1, then we found a sequence
      // j is one past the last number in the sequence
        if (j > i + 1) {
        str += nums[i] + "-" + nums[j - 1];
        i = j - 1;
        }
      // if i is not at nums.length - 1, the append a comma &  space
        if (i < nums.length - 1) {
        str += ", ";
        }
    }

    // RETURN
    return str;
}

console.log(bookIndex(nums1));