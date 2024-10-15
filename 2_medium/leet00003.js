/* 3. Longest Substring Without Repeating Characters */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // 애초에 빈 문자인 경우
    if (s.length === 0) return 0;

    let map = new Map(); // 각 character가 key로 들어가고, 그 인덱스가 value로 들어가는 map
    let len = []; // 앞에서부터 각 인덱스까지 만들 수 있는 최대 길이

    let from = 0;
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);

        // 1. 해당 문자가 있는 경우, from 위치 이동
        if (map.has(char)) {
            next = map.get(char) + 1; // 그 문자 다음 위치로 from 이동시켜야 중복 없음
            // 그 전까지 있는 문자들 모두 삭제
            for (let i = from; i < next; i++) {
                map.delete(s.charAt(i));
            }

            from = next;
        }

        map.set(char, i);
        len[i] = i - from + 1;
    }

    // 구한 길이들 중 최대값 구하기
    return getMax(len);

};

function getMax(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) max = arr[i];
    }

    return max;
}