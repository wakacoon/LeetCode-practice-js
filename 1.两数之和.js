/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let list = [9,4,7,3,8,5,2,1];
    Bubble(list);
};

function Bubble (nums){
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if(nums[i] > nums[j]){
                let pivot = nums[i];
                nums[i] = nums[j];
                nums[j] = pivot;
            }
        }
    }
    console.log(nums);
}

// @lc code=end

