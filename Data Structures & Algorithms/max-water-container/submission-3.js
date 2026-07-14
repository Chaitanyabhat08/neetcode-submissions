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
            // at most holds water
            let pillarHeight = Math.min(heights[left], heights[right]);
            // height * breadth
            let area = pillarHeight * (right - left);
            // only reassign the max value if you find one
            maxArea = Math.max(area, maxArea); 
            // dont move both pointer, move only if you find bigger pillar.
            if(heights[left]<heights[right]){
                left++
            }else{
                right--;
            }

        }
        return maxArea;
    }
}
