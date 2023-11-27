/*
Evaluate the value of the arithmetic expression in Reverse Polish notation.
Valid operators are +, -, / and *. Each operand may be an integer or another expression. 
Note that division between two integers should truncate toward zero.
*/

const evalRPN = function (tokens){
    const stack = [];

    const operators = {
        '+': (num1, num2) => num1 + num2,
        '-': (num1, num2) => num1 - num2,
        '*': (num1, num2) => num1 * num2,
        '/': (num1, num2) => Math.trunc(num1 / num2)
    };


    for(let token of tokens){
        if(operators[token]){
            let num2 = stack.pop();
            let num1 = stack.pop();

            stack.push(operators[token](num1, num2));
        } else{
            stack.push(parseInt(token));
        }
    }
    return stack.pop();


};

console.log(evalRPN(['3', '+', '-', '7', '5']));