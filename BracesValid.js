/* 
    Braces Valid
    Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expected1 = true;

const str2 = "D(i{a}l[ t]o)n{e";
const expected2 = false;

const str3 = "A(1)s[O (n]0{t) 0}k";
const expected3 = false;

function bracesValid(str) {
    // SETUP
    var stack = [];
    var opens = "({[";
    var closeToOpen = {
        ")": "(",
        "]": "[",
        "}": "{",
    };
    // WORK
    for (var i = 0; i < str.length; i++) {
        if (opens.includes(str[i])) {
        // checking if current char is an opening brace
        stack.push(str[i]);
        } else if (str[i] in closeToOpen) {
        // checking if current char is a closing brace
        // checking if the current closing brace matches what is at the end of the stack
        // if they match, its a valid brace closure
        if (closeToOpen[str[i]] === stack[stack.length - 1]) {
            stack.pop();
          // if they do not match, it is invalid brace so return false
        } else {
            return false;
        }
            }
    }
    // RETURN
    return stack.length === 0;
}
console.log(bracesValid(str1));
console.log(bracesValid(str2));
console.log(bracesValid(str3));