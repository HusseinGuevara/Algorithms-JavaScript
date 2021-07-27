/* 
Given an int to represent how much change is needed
calculate the fewest number of coins needed to create that change,
using the standard US denominations
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

const cents5 = 0;
const expected5 = null

function fewestCoinChange(cents) {
    var coins = {};

    // edge case 
    if(cents <= 0) {
        return coins;
    }

    var quarter = Math.floor(cents / 25);
    cents -= 25 * quarter;
    var dime = Math.floor(cents /10);
    cents -= 10 * dime;
    var nickel = Math.floor(cents / 5);
    cents -= 5 * nickel;
    var penny = Math.floor(cents / 1);
    cents -= 1 * penny;
    
    if(quarter != 0) coins['quarter'] = quarter;
    if(dime != 0) coins['dime'] = dime;
    if(nickel != 0) coins['nickel'] = nickel;
    if(penny != 0) coins['penny'] = penny;
    
    return coins;
}
console.log(fewestCoinChange(cents1));
console.log(fewestCoinChange(cents2));
console.log(fewestCoinChange(cents3));
console.log(fewestCoinChange(cents4));
console.log(fewestCoinChange(cents5));