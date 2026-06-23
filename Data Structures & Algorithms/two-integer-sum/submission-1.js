class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const remMap = new Map();
        for(let i=0; i<nums.length; i++){
            let diff = target - nums[i];
            if(remMap.has(diff)){
                return [remMap.get(diff), i];
            }else{
                remMap.set(nums[i], i);
            }
        }
        return [];
    }
}