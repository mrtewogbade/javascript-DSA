//Palindrome Number

//An integer is a palindrome when it reads the smae forward and backward.

// Input: x = 121 >> Output: true
// Input: x = 123 >> Output: false

function isPalindrome(x) {
	
	return x === + x.toString().split("").reverse().join("");
	
}

const result = isPalindrome(121);
console.log(result);