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
    // Bubble(list);
    BubbleFix(list);
};

/**
 * 冒泡排序
 */
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

/**
 * 冒泡优化
 */
 function BubbleFix (nums){
    for (let i = 0; i < nums.length; i++) {
        let resort = false;
        for (let j = i+1; j < nums.length; j++) {
            if(nums[i] > nums[j]){
                let pivot = nums[i];
                nums[i] = nums[j];
                nums[j] = pivot;
                resort = true;
            }
        }
        if (!resort){
            break;
        }
    }
    
    console.log(nums);
}

/**
 * 鸡尾酒法
 */

 function BubbleFix (nums){
    for (let i = 0; i < Floor(nums.length/2); i++) {
        let resort = false;
        let length = nums.length;
        for (let j = i+1; j < nums.length; j++) {
            if(nums[i] > nums[j]){
                let pivot = nums[i];
                nums[i] = nums[j];
                nums[j] = pivot;
                resort = true;
            }
        }
        if (!resort){
            break;
        }
        for (let k = length - i -1; k > i; k--) {
            if(nums[length - i] < nums[k]){
                let pivot = nums[length - i];
                nums[length - i] = nums[k];
                nums[k] = pivot;
                resort = true;
            }
            
        }
    }
    
    console.log(nums);
    console.log('----------');
}

// @lc code=end

