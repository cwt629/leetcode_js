/* 36. Valid Sudoku */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    // 1. row 확인
    for (let row = 0; row < 9; row++) {
        let occupied = Array.from({ length: 10 }, () => (false)); // 1~9 숫자 존재 여부
        for (let col = 0; col < 9; col++) {
            let current = board[row][col];
            if (current === ".") continue;

            current = parseInt(current);
            if (occupied[current])
                return false;
            occupied[current] = true;
        }
    }

    // 2. column 확인
    for (let col = 0; col < 9; col++) {
        let occupied = Array.from({ length: 10 }, () => (false)); // 1~9 숫자 존재 여부
        for (let row = 0; row < 9; row++) {
            let current = board[row][col];
            if (current === ".") continue;

            current = parseInt(current);
            if (occupied[current])
                return false;
            occupied[current] = true;
        }
    }

    // 3. block 확인
    for (let block = 0; block < 9; block++) {
        // 시작 지점
        let [rowStart, colStart] = [Math.floor(block / 3) * 3, (block % 3) * 3];
        let occupied = Array.from({ length: 10 }, () => (false)); // 1~9 숫자 존재 여부
        for (let row = rowStart; row < rowStart + 3; row++) {
            for (let col = colStart; col < colStart + 3; col++) {
                let current = board[row][col];
                if (current === ".") continue;

                current = parseInt(current);
                if (occupied[current])
                    return false;
                occupied[current] = true;
            }
        }
    }

    return true;
};