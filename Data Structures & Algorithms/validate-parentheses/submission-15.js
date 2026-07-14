class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
 if (s.length % 2 !== 0) return false; 

        // 2. Map closing brackets to their matching opening brackets
        const pairs = {
            ')': '(',
            '}': '{',
            ']': '['
        };
        
        const stack = [];

        for (let i = 0; i < s.length; i++) {
            const char = s[i];

            // 3. If it's a closing bracket
            if (pairs[char] !== undefined) {
                // Pop the top element or use a placeholder if stack is empty
                const top = stack.length > 0 ? stack.pop() : '#';
                
                // If it doesn't match the required opening bracket, fail early
                if (top !== pairs[char]) return false;
            } else {
                // 4. It's an opening bracket, push to stack
                stack.push(char);
            }
        }

        // 5. If stack is empty, all brackets matched perfectly
        return stack.length === 0;
    }
}
