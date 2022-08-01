/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isIsomorphic = function (s, t) {
  let left = new Map();
  let right = new Map();

  for (let i = 0; i < t.length; i++) {
    if (!left.has(s[i]) && !right.has(t[i])) {
      left.set(s[i], t[i]);
      right.set(t[i], s[i]);
    } else if (left.get(s[i]) !== t[i] || right.get(t[i]) !== s[i]) {
      return false;
    }
  }

  return true;
};