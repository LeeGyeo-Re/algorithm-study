var result;
var max;

function solution(n, info) {
    result = [];
    max = -1;
    
    // if(info.filter(item => item === 0).length === 11){
    //     result = [...info].map((item, index) => {
    //         if(index < n) return 1;
    //         return item;
    //     });
    //     return result;
    // }
    
    const winScore = getWinArray(info);
    const lionScore = Array.from({length: 11},() => 0);
    
    selection(n, info, winScore, lionScore, 10);
    return max <= 0 ? [-1] : result;
}
// 승리시 들어가는 자원의 최소를 각각 과녁별로 구함
// 상대보다 큰 점수를 만드는 선택을 함
function getWinArray(apeachScore){
    return apeachScore.map(score => score+1);
}

function compare(apeach, lion){
    let aScore = 0, lScore = 0;
    for(let i = 0 ; i < 11; i++){
        if(apeach[i] === 0 && lion[i] === 0) continue;
        if(apeach[i] >= lion[i]) aScore += (10-i);
        else lScore += (10-i)
    }
    return lScore - aScore; 
}

function selection(n, info, winScore, lionScore, index){
    if(n < 0 || index < -1) return ;
    
    const com = compare(info, lionScore);
    if(com > max) {
        result = lionScore, max = com;
        result[10] = n;
        return ;
    }

    // 선택한 경우
    let newN = n-winScore[index];
    let newLion = [...lionScore];
    newLion[index] = winScore[index];
    selection(newN, info, winScore, newLion, index-1);

    // 선택 안한 경우
    selection(n, info, winScore, [...lionScore], index-1);
}
