/*
Given a string of integers, return the number of odd-numbered substrings that can be formed.

For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

solve("1341") = 7. See test cases for more examples.

*/

function solve(s){
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (parseInt(s[i]) % 2 === 1) {
      count += i + 1;
    }
  }

  return count;
};

console.log(solve("1341"));  // Output: 7
