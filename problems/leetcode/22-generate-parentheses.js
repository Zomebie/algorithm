/* 
LeetCode #131: Palindrome Partioning
https://leetcode.com/problems/palindrome-partitioning/description/ 

문제 풀이
1. 답을 담을 배열 생성
2. 가능한 모든 경우의 수기 때문에 재귀 호출로 접근
3. break문: 현재 문자열의 수가 n*2 일 때 현재 문자열을 답 배열에 담고 return
4. 열린 괄호 수가 n보다 작으면 현재 문자열에 열린 괄호를 더하고 열린 괄호 수 + 1 재귀 호출
5. 닫힌 괄호가 열린 괄호 수보다 작으면 현재 문자열에 닫힌 괄호를 더하고 닫힌 괄호 수 + 1 재귀 호출

시간복잡도: O(카탈란수)
*/

const generateParenthesis = n => {
  const answer = [];
  const dfs = (current, open, close) => {
    if (current.length === n * 2) {
      answer.push(current);
      return;
    }

    if (open < n) {
      dfs(current + '(', open + 1, close);
    }

    if (close < open) {
      dfs(current + ')', open, close + 1);
    }
  };

  dfs('', 0, 0);
  return answer;
};
