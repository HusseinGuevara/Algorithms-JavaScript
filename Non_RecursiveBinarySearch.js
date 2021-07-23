/* 
Array: Binary Search (non recursive)
Given a sorted array and a value, return whether the array contains that value.
Do not sequentially iterate the array. Instead, ‘divide and conquer’,
taking advantage of the fact that the array is sorted .
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

function binarySearch(sortedNums, searchNum) {
    var found = false;
    var idx = Math.floor(sortedNums.length/2);

    while ( !found ) {
        if(sortedNums[idx] === searchNum) {
            return true;
            break;
        }
        
        // Base Case
        if(sortedNums.length < 2) break;

        // If the number we are looking for is less than 
        // the index, slice the left side of the array and 
        // search that side
        if( sortedNums[idx] > searchNum) {
            sortedNums = sortedNums.slice(0, idx);
            idx = Math.floor(sortedNums.length/2);
        }

        // If the number we are looking for is greater than 
        // the index, slice the rigth side of the array and
        // search that side
        if( sortedNums[idx] < searchNum) {
            sortedNums = sortedNums.slice(idx + 1, sortedNums.length);
            idx = Math.floor(sortedNums.length/2);
        }
    }
    return found;
}
console.log(binarySearch(nums1, searchNum1));
console.log(binarySearch(nums2, searchNum2));
console.log(binarySearch(nums3, searchNum3));