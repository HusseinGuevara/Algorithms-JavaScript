/* 
String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

const str2 = "a5b5c5"

function decodeStr(str) {
    var newString = "";
    for(var i = 0; i < str.length; i++) {
        //if anumber will return a number 
        //if not a number will retune not a number(NaN)
        var n = parseInt(str[i]);
        // when n is a number, add the previous character and repeat n number of times
        if(n) {
            newString += str[i-1].repeat(n);
        }
    }
    return newString;
}
console.log(decodeStr(str1));
console.log(decodeStr(str2));
