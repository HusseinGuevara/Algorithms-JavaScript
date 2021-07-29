/* 
Recursive Factorial
Input: integer
Output: integer, product of ints from 1 up to given integer

If less than zero, treat as zero.
Bonus: If not integer, truncate (remove decimals).

Experts tell us 0! is 1.

rFact(3) = 6 (1*2*3)
rFact(6.8) = 720 (1*2*3*4*5*6)
*/

const num1 = 3;
const expected1 = 6;
// Explanation: 1*2*3 = 6

// 7!
// 7 * 6 * 5 * 4 * 3 * 2 * 1

const num2 = 6.8;
const expected2 = 720;
// Explanation: 1*2*3*4*5*6 = 720

const num3 = 0;
const expected3 = 1;

const num4 = -10
const expected4 = 3628800


function factorial(n) {
    var int = parseInt(n);
    // EDGE CASE
    if (int < 0) int = Math.abs(n);
    // BASE CASE 
    if (int < 2) return 1;

    // FORWARD PROGRESS
    // RECURSIVE CALL
    return int * factorial(int -1)
}
console.log(factorial(num1));
console.log(factorial(num2));
console.log(factorial(num3));
console.log(factorial(num4));