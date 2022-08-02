/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let longest = 0;
    let count = new Map();
    
    for(let i = 0; i < s.length; i++){
        if(count.has(s[i])){
            count.set(s[i], count.get(s[i]) + 1);
        }else{
            count.set(s[i], 1);
        }
    }
    
    for(const [_, counts] of count.entries()){
        longest += Math.floor(counts / 2) * 2;
        if(longest % 2 === 0 && counts % 2 === 1){
            longest += 1;
        }
    }
    
    return longest;
};