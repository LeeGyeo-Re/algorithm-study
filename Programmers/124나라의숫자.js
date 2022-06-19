function solution(n) {
    return divide(n);
}

function divide(num){
    let result = ''
    let share, remainder;
    if(num < 4) return changeNumber(num);
    while(num >3){
        share = parseInt(num/3);
        remainder = Number(num%3);
        if(remainder === 0) {
            share--;
        }
        result = changeNumber(remainder) + result;
        num = share;
    }
    return changeNumber(share) + result;
}

function changeNumber(num){
    return num.toString().replace('3','4').replace('0','4');
}
