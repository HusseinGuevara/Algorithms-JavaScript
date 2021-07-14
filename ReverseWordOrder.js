/* 
Reverse Word Order
Given a string of words (with spaces)
return a new string with words in reverse sequence.
*/

const str1 = "This is a test";
const expected1 = "test a is This";

function reverseWordOrder(wordsStr) {
    var newString = "";
    // create an array where the words are split and loop thur it
    var wordsArr = wordsStr.split(" ");
    for(var i = wordsArr.length-1; i >= 0; i--) {
        newString += wordsArr[i];
        // add a space betweeen words
        if(i !== 0) { 
            newString += " ";
        }
    }
    return newString;
}
console.log(reverseWordOrder(str1));
console.log(reverseWordOrder(expected1));