/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let array = [...x.toString()];
    
    let i = 0;
    while(i < (array.length/2+1)){
        if(array[i] !== array[array.length-1-i]) return false;
        i++;
    }
    return true;
};
