class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const normal = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        return normal === normal.split('').reverse().join('');
    }
}
