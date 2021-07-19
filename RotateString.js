/* 
String: Rotate String
Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the right by that given integer amount.
*/

const str1 = "Hello World";
const rotateAmnt1 = 0;
const expected1 = "Hello World";

const str2 = "Hello World";
const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const str3 = "Hello World";
const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const str4 = "Hello World";
const rotateAmnt4 = 4;
const expected4 = "orldHello W";

function rotateStr(str, n) {
    var temp_string = "";
    var new_string = "";

    for(var i = 0; i < str.length; i++) {
        if(i < str.length - n) {
            temp_string += str[i];
            // console.log(temp_string);
        } else {
            new_string += str[i];
            // console.log(new_string);
        }
    }
    return new_string + temp_string;
}
console.log(rotateStr(str1, rotateAmnt1));
console.log(rotateStr(str2, rotateAmnt2));
console.log(rotateStr(str3, rotateAmnt3));
console.log(rotateStr(str4, rotateAmnt4));
