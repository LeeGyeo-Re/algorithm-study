function solution(m, musicinfos) {
    const mm =m.replace(/C#/g,'H')
               .replace(/D#/g,'I')
               .replace(/F#/g,'J')
               .replace(/G#/g,'K')
               .replace(/A#/g,'L')
    const result = music(musicinfos)
                        .filter(code => code[1].includes(mm))
                        .reduce((acc, cur) => {
                            if(acc[2] >= cur[2]) return acc;
                            else return cur;
                        }, [-1,-1,-1])[0];
    
    
    return result === -1 ? "(None)" : result;  
}

function music(musicinfos){
    const code = musicinfos.map(music => {
        const [start, end, title, codes ] = music.split(',');
        const codesRep = codes.replace(/C#/g,'H')
                            .replace(/D#/g,'I')
                            .replace(/F#/g,'J')
                            .replace(/G#/g,'K')
                            .replace(/A#/g,'L');
        const time = getTime(start, end);
        const codeLen = codesRep.length;
        const resultCode = codesRep.repeat(parseInt(time/codeLen)) + codesRep.substring(0,time%codeLen);
        return [title, resultCode, time]
    })
    return code;
}

function getTime(start, end){
    const [startH, startM] = start.split(':'); 
    const [endH, endM] = end.split(':');
    return (Number(endH)-Number(startH)) * 60 + (Number(endM) - Number(startM))
}
