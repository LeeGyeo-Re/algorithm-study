function solution(participant, completion) {
    const object = participant.reduce((acc,item) => {
        acc[item] = acc[item] ? acc[item]+1 : 1
        return acc
    }, {})
    
    completion.forEach(c => {
        object[c]--;
        if(object[c] === 0) delete object[c];
    })
    
    const result = Object.keys(object)[0];
    return result;
}
