/* 
String Encode
You are given a string that may contain sequences of consecutive characters.
Create a function to shorten a string by including the character,
then the number of times it appears. 
If final result is not shorter (such as "bb" => "b2" ),
return the original string.
*/

const str1 = "aaaabbcddd";
const expected1 = "a4b2c1d3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc"; 
const expected4 = "bbcc";

function encodeStr(str) {
    var newString = "";
    var counter = 1;
    for(var i = 0; i < str.length; i++) {
        // if index 1 is equal to index 2, add 1 to counter
        if(str[i] == str[i+1]) {
            counter ++;
        }
        // if not add that single charecter to new string 
        else {
            newString += str[i] + counter;
            counter = 1;
        }
        // if news old string is longer or equal to new string, return old string
        if(str.length <= newString.length) {
            return str
        }
    }
    return newString;
}
console.log(encodeStr(str1));
console.log(encodeStr(str2));
console.log(encodeStr(str3));
console.log(encodeStr(str4));