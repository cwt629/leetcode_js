/* 46. Permutations */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    if (nums.length === 1) return [nums];
    let result = [];

    nums.forEach((number, i, origin) => {
        let remaining = [...origin.slice(0, i), ...origin.slice(i + 1)];
        let perm = permute(remaining);
        let attachedPerm = perm.map((arr) => [number, ...arr]);
        result.push(...attachedPerm);
    })

    return result;
};