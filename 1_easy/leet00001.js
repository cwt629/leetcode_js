/* 1. Two Sum */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target)
                return [i, j];
        }
    }

    return [-1, -1]; // 그럴 리 없지만 답이 없는 경우
};