/**
 * @param {string} digits
 * @return {string[]}
 */

var digitObj = {
    2:['a','b','c'],
    3:['d','e','f'],
    4:['g','h','i'],
    5:['j','k','l'],
    6:['m','n','o'],
    7:['p','q','r','s'],
    8:['t','u','v'],
    9:['w','x','y','z']
}
var result = [];

var letterCombinations = function(digits) {
    if(digits.length === 0) return [];
    const arr = [...digits].map(digit => {
        return digitObj[digit];
    });
    
    result = [];
    
    solution(0, arr, '');
    return result;
    
};


var solution = function(index, arr, str){
    if(index === arr.length) {
        result.push(str);
        return ;
    }
    
    const digit = arr[index];
    for(let i = 0 ; i < digit.length; i++)
        solution(index+1, arr, str+digit[i]);
    
}
