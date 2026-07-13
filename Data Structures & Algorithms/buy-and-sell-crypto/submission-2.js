class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let num = prices.length;
        let buyPrice = prices[0]; 
        // Start low so any real number will be larger
        let maxProfit = 0; 
        for(let i = 1; i<num;i++){
            if(prices[i] < buyPrice){
                buyPrice = prices[i];
            }else{
                maxProfit = Math.max(maxProfit, prices[i] - buyPrice)
            }
        }
        return maxProfit;
    }
}
