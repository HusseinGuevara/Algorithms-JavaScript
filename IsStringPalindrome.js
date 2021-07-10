/* 
String: Is Palindrome
Create a function that returns a boolean whether the string is a strict palindrome. 
- palindrome = string that is same forwards and backwards

Do not ignore spaces, punctuation and capitalization
*/

const str1 = "a x a";
const expected1 = true;

const str2 = "racecar";
const expected2 = true;

const str3 = "Dud";
const expected3 = false;

const str4 = "oho!";
const expected4 = false;

function isPalindrome(str) {
    // Need a new string to add individual letters
    var palindrome = "";
    // for loop to iterate thru string backwards
    for(var i = str.length - 1; i >= 0; i--) {
        // add each letter to new string
        palindrome += str[i];
    }
    // check to see if new string is the same as argument
    if(palindrome === str) {
        return true
    } else {
        return false
    }
}
console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
console.log(isPalindrome(str4));
