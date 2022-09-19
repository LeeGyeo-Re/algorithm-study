/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n === 1) return '1';
    return solution(n, 2, '11').toString();
};

const solution = function(n, count, result){
    if(n === count) return result;
    return solution(n, count+1, calculation(result))
}

const calculation = function(num){
    let prev = '-1';
    let count = 0;
    let result = '';
    for(let i = 0 ; i < num.length; i++){
        const cur = num.charAt(i);
        if(prev === '-1') prev = cur;
        if(cur !== prev){
            result = result + count + prev;
            count = 1;
            prev = cur;
        }else{
            count++;
        }
    }
    result = result + count + prev;
    return result;
}
