var log;

function solution(relation) {
    var answer = 0;
    log = {};
    for(let i = 0 ; i < relation[0].length; i++)
        selection([i], i, relation)
    only()
    let newLog = Object.keys(log);
    return newLog.length;
}

// 최소성 탐색 로직
function only(){
    let newLog = Object.keys(log);
    for(let i = 0 ; i < newLog.length; i++){
        const t1 = newLog[i].split(',');
        for(let j = 0; j < newLog.length; j++){
            const t2 = newLog[j].split(',');
            if(i === j) continue;
            if(t1.length > t2.length)
                if(t1.filter(t => t2.includes(t)).toString() === t2.toString())
                    delete log[newLog[i]];
            else{
                if(t2.filter(t => t1.includes(t)).toString() === t1.toString())
                    delete log[newLog[j]]
            }
        }
    }
    
}


// selection
function selection(indexArray, index, relation){
    // 종료 조건
    if(log[indexArray.toString()]) return ;
    if(index === relation[0].length) return ;
    if(isDuplicate(indexArray, relation)){
        log[indexArray.toString()] = true;
        return ;
    }
    
    // 재귀
    for(let i = index+1; i < relation[0].length; i++){
        // select
        selection([...indexArray, i], i, relation);
        
        // not select
        selection([...indexArray], i, relation);
    }
}
// isDuplicate
function isDuplicate(indexArray, relation){
    const len = relation.length;
    const temp = [...new Set(relation.map(item => {
        return indexArray.map(index => {
            return item[index];
        }).toString();
    }))]
    return temp.length === len;
}


