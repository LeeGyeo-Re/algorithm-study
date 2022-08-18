/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
//     if(dividend === 0) return 0
//     let sum = 0;
//     let count = -1;
//     let div = Math.abs(divisor);
//     let divEnd = Math.abs(dividend);
    
//     while(sum <= divEnd ){
//         sum+=div;
//         count++;        
//     }
    
//     let result = (count * isMinus(dividend, divisor))
    let result = parseInt(dividend/divisor)//dividFunc(dividend, divisor)
    return result > 2147483647 ? 2147483647 : result < -2147483648 ? -2147483648 : result ; 
};

const isMinus = (dividend, divisor) => {
    if(dividend < 0){
        if(divisor < 0) return 1;
        else return -1;
    }
    else if (dividend > 0){
        if(divisor < 0) return -1;
        else return 1;
    }else
        return 0;
}

const dividFunc = (dividend, divisor) => {
    if(Math.abs(dividend) <= 1) return dividend * isMinus(dividend, divisor);
    
    let i = 0 ; 
    let result = 0;
    
    while(divisor !== 0){
        while(Math.pow(2,i) < divisor) i++;
        result += (dividend >> i);
        
        divisor -= Number(Math.pow(2,i));
        i = 0;
    }
    
    return result ;
}
