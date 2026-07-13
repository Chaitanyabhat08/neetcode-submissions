class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;
        let mid = (left + right - 1) / 2 ;
        while(left<right){
            if(numbers[left] + numbers[right] == target){
                return [++left, ++right];
            } else if(numbers[left] + numbers[right] > target){
                right --;
            }else if(numbers[left] + numbers[right] < target){
                left ++;
            }
        }
    }
}
