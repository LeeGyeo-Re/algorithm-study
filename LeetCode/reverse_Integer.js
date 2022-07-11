/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const t = [...Math.abs(x).toString()];
    const isPlus = x >= 0;
    
    let result = Number(t.reduce((acc, cur) => cur+acc , ''))
    
    return isPlus ? (result <= Math.pow(2,31)-1 ? result : 0) : (result <= Math.pow(2,31) ? -1 * result : 0)
    
};
