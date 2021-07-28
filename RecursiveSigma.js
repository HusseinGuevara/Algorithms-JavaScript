/* 
Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected3 = 0;

function recursiveSigma(num) {
    // EDGE CASE
    if(num < 1) return 0;
    //BASE CASE 
    if(num == 1) return 1;
    console.log(num);
    
    // FORWARD PROGRESS/RECURSIVE CALL
    return Math.floor(num) + recursiveSigma(num - 1);
}
console.log(recursiveSigma(num1));
console.log(recursiveSigma(num2));
console.log(recursiveSigma(num3));