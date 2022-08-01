/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let left = 0;
    let right = 1;
    let profit = 0;
    
    while(right < prices.length){
        if(prices[left] < prices[right]){
            profit = prices[right] - prices[left];
            max = Math.max(max, profit);
        }else{
            left = right;
        }
        right++;
    }
    
    return max;
};