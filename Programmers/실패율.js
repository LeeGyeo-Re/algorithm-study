function solution(N, stages) {
    const countObj = getChalangeCount(N,stages);
    return getFailureRange(N, stages, countObj);
}

// 어디까지 도달했는지에 따라 나머지 도달율이 증가한다.
// 각 순서별 도달 위치에 따른 도전 횟수 구하는 함수
function getChalangeCount(N, stages){
    const result = {};
    stages.forEach(stage => {
            for(let i = 1 ; i <= (stage <= N ? stage : N); i++ )
                result[i] = result[i] ? result[i] + 1 : 1;
    })
    return result;
}
// stage 별 실패율 구하는 함수
function getFailureRange(N, stages, stageCountObj){
    const stgObj = {};
    stages.forEach(stage => {
        stgObj[stage] = stgObj[stage] ? stgObj[stage] + 1 : 1;
    })
    
    const failure = Array.from({length: N}, (v, i) => i+1).map(stage => {
        return [stage, (stgObj[stage] || 0)/(stageCountObj[stage]||N)]
    })
    return failure.sort((a,b) => {
        const a1 = a[1];
        const b1 = b[1];
        
        if(a1 > b1) return -1;
        else return 1;
    }).map(item => Number(item[0]))
}
