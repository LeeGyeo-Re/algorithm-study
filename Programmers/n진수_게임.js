function solution(n, t, m, p) {
    return nGame(n,t,m,p);
}

function nGame(n,t,m,p) {
    let result = '';
    
    const totalCount = p+m*(t-1);
    let num = 0;
    let numStr = '';
    
    while(numStr.length < totalCount)
        numStr += (num++).toString(n);
    
    for(let i = 0 ; i < t; i ++)
        result += numStr.charAt((p-1)+m*i);
    
    return result.toUpperCase();
}
