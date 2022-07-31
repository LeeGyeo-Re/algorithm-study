function solution(cacheSize, cities) {
    return getTotalTime(cacheSize, cities);
}

function getTotalTime(cacheSize, cities){
    if(cacheSize === 0) return cities.length * 5
    const obj = {};
    let cacheArray = [];
    let time = 0;
    
    cities.forEach(input => {
        const city = input.toUpperCase();
        
        if(cacheArray.length === cacheSize){
            if(obj[city]){
                cacheArray = cacheArray.filter(c => c !== city);
                cacheArray.push(city);
                obj[city] = true;
                time++;
            }
            else{
                const leftCity = cacheArray.shift();
                obj[leftCity] = false;
                cacheArray.push(city);
                obj[city] = true;
                time+=5;
            }
        }else{
            if(obj[city]){
                time++;
                cacheArray = cacheArray.filter(c => c !== city);
            }
            else{
                time+=5;
                obj[city] = true;
            }
            cacheArray.push(city);
        }
    })
    
    return time;
}
