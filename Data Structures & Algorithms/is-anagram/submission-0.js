class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    compareMaps(map1, map2) {
     // First, check if they have the same number of keys
        if (map1.size !== map2.size) return false;

        // Check if every key exists in map2 and holds the exact same value
        for (const [key, val] of map1) {
            if (!map2.has(key) || map2.get(key) !== val) {
            return false;
            }
        }
        return true;
    }
    isAnagram(s, t) {
        const map1 = new Map();
        const map2 = new Map();
        for(let char of s){
            if(map1.has(char)){
                map1.set(char, map1.get(char)+1);
            }else{
                map1.set(char, 1)
            }
        }
        for(let char of t){
            if(map2.has(char)){
                map2.set(char, map2.get(char)+1);
            }else{
                map2.set(char, 1)
            }
        }
        return this.compareMaps(map1, map2);
    }
}
