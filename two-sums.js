// Given an array of integers, return indices of the two numbers such that they add up to target.
// return indices of the two numbers such that they add up to target

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]

// Brute Force Solution

const twoSum = function (nums, target){
    for (let i = 0; i < nums.length; i++){
        for (let j = 1 + i; j < nums.length; j++){
            if (nums[i] + nums[j] === target) return [i, j]
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9));

