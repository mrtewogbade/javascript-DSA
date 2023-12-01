// Given an array nums and a value val, remove all intances of that value in-place and return the new length. NOTE:  Do not allocate extra space for another array , you must do this by modifying the input array in-place with O(1) extra memory.

function removeElement(nums, val) {
    if(!nums) return  0;

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === val){
            nums.splice(i, 1);
            i--;
        } 
    }
    return nums.length;
};

console.log(removeElement([3,2,2,3], 3)); // 2