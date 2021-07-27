/* 
Missing Value
You are given an array of length N that contains, in no particular order,
integers from 0 to N . One integer value is missing.
Quickly determine and return the missing value.
*/

const nums1 = [3, 0, 1];
const expected1 = 2;

const nums2 = [3, 0, 1, 2];
const expected2 = null;
// Explanation: nothing is missing

function missingValue(unorderedNums) {
    var missingVal = null;
    var orderedNums = unorderedNums.sort();

    for(var i = 0; i < orderedNums.length-1; i++) {
        if(orderedNums[i] + 1 !== orderedNums[i + 1]) {
            missingVal += orderedNums[i] + 1;
        }
    }
    return missingVal;

}
console.log(missingValue(nums1));
console.log(missingValue(nums2));