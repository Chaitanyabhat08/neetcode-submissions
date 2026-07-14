class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(!(s.length % 2==0)) return false; 
        const stack = [];
        const map = new Map();
        map.set('(', ")");
        map.set('[', "]");
        map.set('{', "}");
        for(let i=0;i<s.length;i++){
            console.log(stack);
            if(s[i] == '(' || s[i] == '{' || s[i] == '['){
                stack.push(s[i]);
            } else if(s[i] == ')' || s[i] == '}' || s[i] == ']'){
                const top = stack.pop();
                if(map.get(top) !== s[i]) return false;
            }

        }
        return stack.length == 0
    }
}
