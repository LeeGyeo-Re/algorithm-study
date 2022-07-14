function solution(n, k) {
    const number = notation(n,k);
    const result = getSub(number).length;//getSubsequence(number).length;
    return result;
}

// n진수로 변환
function notation(num, k){
    return num.toString(k);
}

function isReq(i, j, subNum, number){
    if(subNum.includes('0')) return false;
    
    if(i === 0) return true;
    else if(j === number.length) return true;
    else if(number.charAt(i-1) === '0' && number.charAt(j) === '0') return true;
    else if(subNum === number) return true;
    
    return false;
}

// 모든 부분수열 구하기
function getSubsequence(number){
    let temp = [];
    let range = [];
    for(let i = 0 ; i< number.length; i++)
        for(let j = i+1 ; j < number.length+1; j++){
            const subNum = number.substring(i,j);
            if(isPrime(subNum) && Number(subNum) > 1 && isReq(i,j,subNum, number)) {
                // 범위에 포함되지 않는 경우
                if(range.length === 0 || range.find(r => j <= r[0] || i >= r[1])){
                    temp.push(Number(subNum));
                    range.push([i,j]); 
                    console.log('1',[i,j])
                }else{ // 범위에 포함되는 경우
                    range = range.map((r,index) => {
                        if(r[0] >= i && r[1] <= j) {
                            temp[index] = Number(subNum);
                            return [i,j]; 
                        }
                        return r
                    })
                    console.log('2',[i,j])
                }
            }
        }
    console.log(number, range)
    return temp;
}

function getSub(number){
    const arr = number.split('0').filter(n => n !== '');
    return arr.filter(a => isPrime(Number(a)));
}

// 소수인지 판별
function isPrime(number){
    if(number === 1 || number === 0) return false;
    for(let i = 2 ; i*i <= number; i++)
        if(number%i === 0) return false;
    return true;
}
