//Given a string (s) containing the characters '(', ')', '{', '}', and '[', ']'. Determine if the input string is valid. An input is valid if;
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.

/**
 * Example 1:
 * Input: s = '()'
 * Output: = true
 * 
 * Example 2:
 * Input: s = '() {} []'
 * Output: = true
 */

const isValid = function(s) {
    const stack = [];
    const parens = '() {} []';
    let i = 0;
    while (i < s.length) {
        stack.push(s[i]);
        i++;
        if (stack.length >= 2) {
            let potParenthesis = stack[stack.length - 2] + stack[stack.length - 1];
            if (parens.includes(potParenthesis)) {
                stack.pop();
                stack.pop();
            }
        }
    }
    return stack.length === 0;
}

console.log(isValid('[(')); // false
console.log(isValid('()')); // true