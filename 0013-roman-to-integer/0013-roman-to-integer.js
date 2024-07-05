/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let num = 0;
  let reverse = s.split("").reverse().join("");
  console.log(reverse);

  for(let i = 0; i < reverse.length; i++){
    switch(reverse[i]){
      case "I":
        num += 1;
        console.log(num);
        break;

      case "V":
        num += 5;
        if(reverse[i+1] === "I"){
          num -= 1;
          i ++;
        }
        console.log(num);
        break;

      case "X":
        num += 10;
        if(reverse[i+1] === "I"){
          num -= 1;
          i ++;
        }
        console.log(num);
        break;

      case "L":
        num += 50;
        if(reverse[i+1] === "X"){
          num -= 10;
          i ++;
        }
        console.log(num);
        break;

      case "C":
        num += 100;
        if(reverse[i+1] === "X"){
          num -= 10;
          i ++;
        }
        console.log(num);
        break;

      case "D":
        num += 500;
        if(reverse[i+1] === "C"){
          num -= 100;
          i ++;
        }
        console.log(num);
        break;

      case "M":
        num += 1000;
        if(reverse[i+1] === "C"){
          num -= 100;
          i ++;
        }
        console.log(num);
        break;
    }
  }
  return num;
};