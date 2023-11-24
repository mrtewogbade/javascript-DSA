//Palindrome Number

//An integer is a palindrome when it reads the smae forward and backward.

// Input: x = 121 >> Output: true
// Input: x = 123 >> Output: false

function isPalindrome(x) {
	
	return x<0 ? false : x === + x.toString().split("").reverse().join("");
	
}

const result = isPalindrome(60);
console.log(result);


