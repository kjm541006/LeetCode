/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
  const len = s.length;
  let arr = new Array(len).fill(0);
  const stk = [];
  for (let i = 0; i < n; ++i) {
      if (s[i] == '(') {
          stk.push(i);
      } else if (s[i] == ')') {
          const j = stk.pop();
          arr[i] = j;
          arr[j] = i;
      }
  }
  let i = 0;
  let x = 1;
  const ans = [];
  while (i < len) {
      const c = s.charAt(i);
      if (c == '(' || c == ')') {
          i = arr[i];
          x = -x;
      } else {
          ans.push(c);
      }
      i += x;
  }
  return ans.join('');
};