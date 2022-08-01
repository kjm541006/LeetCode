/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  for (let i = 0; i < t.length; i++) {

    if (t[i] == s[0]) {
      s = s.substring(1);
    }
    t = t.substring(1);
    i--;
  }

  if (s.length > 0) {
    return false;
  } else {
    return true;
  }
};