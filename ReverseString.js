/* 
	String: Reverse
	Given a string,
	return a new string that is the given string reversed
*/
// Strings are immutable
// Strings are 0 indexed
// str1[3]
const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

function reverseString(str) { 
    // Setup
    reversedString = "";
    // Work
    for(var i = str.length-1; i >= 0; i--) {
        reversedString += str[i];
    }
    // Return
    return reversedString;
}

console.log(reverseString(str1));
console.log(reverseString(str2));