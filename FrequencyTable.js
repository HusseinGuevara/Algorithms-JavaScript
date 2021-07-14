/* 
Given an array of strings
return a sum to represent how many times each array item is found (a frequency table)
Useful methods:
Object.hasOwnProperty("keyName")
    - returns true or false if the object has the key or not
Python: key in dict
*/

const arr1 = ["a", "a", "a"];
const expected1 = {
    a: 3,
};

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
    a: 2,
    b: 1,
    c: 3,
    B: 1,
    d: 1,
};

const arr3 = [];
const expected3 = {};

function frequencyTableBuilder(arr) {
    table = {};
    // loop thru given array
    for(var i = 0; i < arr.length; i++) {
        // hasOwnProperty checks to see if the object has a key
        if(table.hasOwnProperty(arr[i])) {
            table[arr[i]] ++;
        }
        // if the object does not have a key add it
        else {
            table[arr[i]] = 1;
        }
    }
    return table
}
console.log(frequencyTableBuilder(arr1));
console.log(frequencyTableBuilder(arr2));
console.log(frequencyTableBuilder(arr3));