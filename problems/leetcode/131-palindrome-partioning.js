/**
 * LeetCode #131: Palindrome Partioning
 * https://leetcode.com/problems/palindrome-partitioning/description/
 *
 * 문제 풀이
 * 1. 주어진 문자열에서 만들 수 있는 모든 substring을 만든다.
 * 2. aab면 [a, a, b], [aa, b], [aab] <- 트리 그려보기!!
 * 3. 0,1(a) -> 1,2(a) -> 2,3(b)
 * 4. 0,2(aa) -> 2->3(b)
 * 5. 0,3(aab)
 * 6. dfs를 사용해 만들 수 있는 모든 substring을 만드는데 여기서 필요한 건, 현재 palindrome이 담긴 배열과
 * substring이 시작할 인덱스(i+1에서 자르니까 그 다음 substring은 i+1에서 시작해야함)
 * 7. substring palindrome인지 확인 후 재귀호출
 * 8. break 문: index가 문자열 길이만큼 왔을 때 더이상 자를 수 있는 곳이 없으므로 break
 *
 * 시간복잡도
 * 문자를 자를지 말지 선택 O(2^N)
 * 팰린드롬인지 검사 O(N)
 * O(N * 2^N)
 */

const isPalindrome = s => {
  return s === s.split('').reverse().join('');
};

const partition = s => {
  const answer = [];

  const backtrack = (start, current) => {
    if (start === s.length) {
      answer.push([...current]);
      return;
    }

    for (let i = start; i < s.length; i++) {
      const sub = s.substring(start, i + 1);
      if (isPalindrome(sub)) {
        current.push(sub);
        backtrack(i + 1, current);
        current.pop();
      }
    }
  };

  backtrack(0, []);
  return answer;
};
