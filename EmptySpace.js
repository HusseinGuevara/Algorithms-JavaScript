/* 
Given a string that may have extra spaces at the start and the end,
return a new string that has the extra spaces at the start and the end trimmed (removed)
do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

function trim(str) {
    var startIdx = 0;
    var endIdx = str.length - 1;

    while (str[startIdx] == " ") {
    startIdx++;
    }

    while (str[endIdx] == " ") {
    endIdx--;
    }

    return str.slice(startIdx, endIdx + 1)
}
console.log(trim(str1));