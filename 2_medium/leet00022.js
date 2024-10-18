/* 22. Generate Parentheses */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let answer = [];

    let dfs = (str, open, close) => {
        // 완료된 경우
        if (str.length === n * 2) {
            answer.push(str);
            return;
        }

        // 1. 여는 괄호
        if (open < n) {
            dfs(str + "(", open + 1, close);
        }

        // 2. 닫는 괄호
        if (open > close) {
            dfs(str + ")", open, close + 1);
        }
    }

    dfs("", 0, 0);

    return answer;
};