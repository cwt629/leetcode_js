/* 7. Reverse Integer */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let mult = (x >= 0) ? 1 : -1;
    const MAX_INTEGER = Math.pow(2, 31) - 1, MIN_INTEGER = -Math.pow(2, 31);
    let abs = Math.abs(x);

    let reversedResultInString = abs.toString().split("").reverse().join("");
    let result = BigInt(Number(reversedResultInString)) * BigInt(mult);

    if (result > BigInt(MAX_INTEGER) || result < BigInt(MIN_INTEGER))
        return 0;

    return Number(result);
};