/**
 * @param {number} n
 * @return {boolean}
 */

//n 은 Number
var isHappy = function(n) {
    let ans = 0;
    let arr = [];
    while(1){
        ans = check(n);
        if(ans == 1){
            return true;
        };
        if(arr.includes(ans)){
            return false;
        }
        arr.push(ans);
        n = ans;
        
    }
    return false;

};

function check(num){
    let sum = 0;
    num = num.toString();
    for(let i in num){
        sum += parseInt(num[i]) ** 2;
    }
    return sum;
}