// // ==> 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...
// // f(0) = 0, f(1) = 1;
// // f(n) = f(n-1) + f(n - 2); for n > 1;
// // Input: n=3 -->> Output: 2

// // METHOD 1

// const fib = function(n) {
//     let arr = [0, 1];
//     for (let i = 2; i < n; i++) {
//         arr.push(arr[i - 1] + arr[i - 2]);
//     }
//     return arr;
// }

// console.log(fib(6));



// // METHOD 2

// const fibonacciNum = function(num){
//     if (num <= 1) return num;
//     return fibonacciNum(num - 1) + fibonacciNum(num - 2);
// };

// console.log(fibonacciNum(5));





let numbers =  [1, 2, 3, 4, 5];

function max(...numbers){
   return Math.max(...numbers)
}

console.log(max(4,1,9,-2,89));