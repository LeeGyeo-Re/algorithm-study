/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length < 2) return s.length;
    let max = 0;
    let index = 1;
    let start = 0;
    let array = [...s];
    
    while(index < array.length){
        const substr = array.slice(start, index);
        const len = index - start;
        const nextChr = array[index];
        const findIndex = substr.findIndex(item => item === array[index]) + start;
        if(index - start > max) max = len;
        if(findIndex >= 0) start = findIndex + 1;
        
        index++;
    }

    if(index - start > max) max = index - start;
    
    return max;
};


