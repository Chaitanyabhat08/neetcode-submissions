class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        let left = 0;
        let right = heights.length - 1;
        while(left<right){
            let pillarHeight = Math.min(heights[left], heights[right]);
            let area = pillarHeight * (right - left);
            maxArea = Math.max(area, maxArea); 
            if(heights[left]<heights[right]){
                left++
            }else{
                right--;
            }

        }
        return maxArea;
    }
}
