class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) { 
        const n = nums.length;
        const cSum =( n * (n + 1))/2;
        const actualSum = nums.reduce((acc, curr) =>  acc + curr, 0);
        return cSum - actualSum;
    }
}
