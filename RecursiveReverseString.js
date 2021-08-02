/* 
Recursively reverse a string
helpful methods:
str.slice(beginIndex[, endIndex])
returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abc";
const expected1 = "cba";

const str2 = "";
const expected2 = "";

const str3 ="racecar3"

const str4 ="hello"

function reverseStr(str) {
    // EDGE CASE 
    if(str.length < 2) return str;

    // BASE CASE/FORWARD PROGRESS
    var strNoFirst = str.slice(1);
    return reverseStr(strNoFirst) + str[0];
}
console.log(reverseStr(str1));
console.log(reverseStr(str2));
console.log(reverseStr(str3));
console.log(reverseStr(str4));