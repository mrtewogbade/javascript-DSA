function minMaxPairSum(nums) {
  nums.sort((a,b) => a - b)
  
  const n = nums.length;
  let maxPairSum = 0;

  
  for (let i = 0; i < n / 2; i++) {
    const pairSum = nums[i] + nums[n - i - 1];
    maxPairSum = Math.max(maxPairSum, pairSum);
  }

  return maxPairSum;
}

// Example usage:
const nums1 = [3, 5, 2, 3];
console.log(minMaxPairSum(nums1)); // Output: 7;


