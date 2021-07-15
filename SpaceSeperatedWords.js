/* c
Given a string contai{}ning space separated words
Reverse each word in the string.
If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

function reverseWords(str) {
    var words = str.split(" ");
    var wordsReversed = "";

    for(var word of words) {
        reversedWord = "";
        for(var i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        }
        if(wordsReversed.length > 0) {
            reversedWord = " " + reversedWord;
        }
        wordsReversed += reversedWord;
    }
    return wordsReversed;
}
console.log(reverseWords(str1));
console.log(reverseWords(str2));
console.log(reverseWords(str3));