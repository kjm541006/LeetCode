/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let word = s.trim().split("").reverse().join("");
  for(let i = 0; i < word.length; i++){
    if(word[i] === " "){
      return i;
    }
  }
  return word.length;
    
};