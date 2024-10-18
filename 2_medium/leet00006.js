/* 6. Zigzag Conversion */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    let strings = Array.from({ length: numRows }, () => (""));

    let index = 0;
    while (index < s.length) {
        // 0 -> 1 -> ... -> numRows - 1행
        for (let row = 0; row <= numRows - 1 && index < s.length; row++)
            strings[row] += s.charAt(index++);

        // numRows - 2 -> ... -> 1행
        for (let row = numRows - 2; row > 0 && index < s.length; row--)
            strings[row] += s.charAt(index++);
    }

    return strings.join("");
};