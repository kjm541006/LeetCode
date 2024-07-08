/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  
  for (let i = 0; i < s.length; i++) {
    let x = s[i];
    if(x === "(" || x === "{" || x === "["){
      stack.push(x);
    } else if(stack.length < 1){
      return false;
    } else if(x === ")"){
      if(stack[stack.length - 1] === "("){
        stack.pop();
      } else {
        return false;
      }
    } else if(x === "}"){
      if(stack[stack.length - 1] === "{"){
        stack.pop();
      } else {
        return false;
      }
    } else if(x === "]"){
      if(stack[stack.length - 1] === "["){
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};
