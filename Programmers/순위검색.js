// 효율성 통과 못 한 풀이
// 정확성만 통과함

function solution(info, query) {
    const result = query.map(q => {
        return condition(q, info).length
    })
    return result;
}

function condition(query, info) {
    const [language, job, career, lastParams] = query.split(' and ');
    const [soulFood, cutLine] = lastParams.split(' ');
    
    const result = info.filter(i => {
        const [infoLanguage, infoJob, infoCareer, infoSoulFood, infoScore] = i.split(' ');
        const ret = (language === '-' ? true : infoLanguage === language )
         && (job === '-' ? true : infoJob === job )
         && (career === '-' ? true : infoCareer === career )
         && (soulFood === '-' ? true : infoSoulFood === soulFood )
         && (Number(infoScore) >= Number(cutLine));
        return ret;
    });
    
    return result;
}
