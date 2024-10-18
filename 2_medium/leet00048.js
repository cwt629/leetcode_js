/* 48. Rotate Image */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let start = 0, end = matrix.length - 1; // 정사각행렬이므로, 외곽 틀을 하나씩 돌린다 생각하여 그 시작/끝 좌표

    while (start < end) {
        let temp = matrix[start].slice(start, end);

        // 1. 왼쪽 틀 -> 위쪽
        for (let row = end; row > start; row--)
            matrix[start][start + end - row] = matrix[row][start];

        // 2. 아래쪽 틀 -> 왼쪽
        for (let col = end; col > start; col--)
            matrix[col][start] = matrix[end][col];

        // 3. 오른쪽 틀 -> 아래쪽
        for (let row = start; row < end; row++)
            matrix[end][start + end - row] = matrix[row][end];

        // 4. 임시 틀 -> 오른쪽
        for (let row = start; row < end; row++)
            matrix[row][end] = temp[row - start];

        start++;
        end--;
    }
};