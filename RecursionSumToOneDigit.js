/*
Sum To One Digit
Implement a function sumToOne(num)​ that,
given a number, sums that number’s digits
repeatedly until the sum is only one digit. Return
that final one digit result.
Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

const num4 = 38;
const expected4 = 2;

const num5 = "dog"
const expected5 = null;

function sumToOneDigit(num) {
    // EDGE CASE 
    if(isNaN(parseInt(num))) return null;
    
    // BASE CASE
    if(num < 10) return num;
    
    // FORWARD PROGRESS
    var numToString = num.toString();
    var sum = 0;

    for(strDigit of numToString) {
        sum += parseInt(strDigit);
    }

    // RECURSIVE CALL 
    return sumToOneDigit(sum)

}
console.log(sumToOneDigit(num1));
console.log(sumToOneDigit(num2));
console.log(sumToOneDigit(num3));
console.log(sumToOneDigit(num4));
console.log(sumToOneDigit(num5));