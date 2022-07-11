/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length === 1) return s;
    if(s.length === 2 && s.charAt(0) === s.charAt(1)) return s;
    
    let max = -1;
    let result = ''
    
    let arr = new Set();
    
    for(let i = 0 ; i < s.length; i++){
        for(let j = i+1; j < s.length+1; j++){
            const str1 = s.substring(i, j);
            arr.add(str1)
        }
    }
    
    [...arr].forEach((str1) => {
        if(isPalindrom(str1) && str1.length > max) {
            max = str1.length;
            result = str1;
        }
    })
    
    return result;
    
};

const isPalindrom = (s) =>{
    const half = s.length/2;
    return s.substring(0,half) === s.substring(half+s.length%2,s.length).split("").reverse().join("")
}
