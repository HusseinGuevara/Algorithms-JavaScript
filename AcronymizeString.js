/* 
	Acronyms
	Create a function that, given a string, returns the string’s acronym 
	(first letter of each word capitalized). 
	Do it with .split first if you need to, then try to do it without
*/

const str1 = " there's no free lunch - gotta pay yer way. ";
const expected1 = "TNFL-GPYW";

const str2 = "Live from New York, it's Saturday Night!";
const expected2 = "LFNYISN";

const str3 = "When you come back, take out the thrash!";
const expected3 = "WYCBTOTT";

function acronymize(str) {
    //Setup
    var acronym = "";
    var wordsArr = str.split(" ");
    //Work
    for (var word of wordsArr) {
        acronym += word[0].toUpperCase();
        
    }
    //Return
    
    return acronym;
}

console.log(acronymize(str3));
console.log(acronymize(str2));
