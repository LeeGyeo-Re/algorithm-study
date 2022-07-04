function solution(fees, records) {
    return getResult(parsing(records), fees)
}

function getResult(recordObj, fees) {
    let result = {};
    for(let number in recordObj){
        const newN = recordObj[number].length % 2 === 0 ? 
              [...recordObj[number]] : [...recordObj[number], '23:59'];
        let allTime = 0;
        for(let i = 0 ; i < newN.length; i+=2)
            allTime += calculateTime(newN[i], newN[i+1]);
        const sum = calculateFee(fees, allTime);
        result[number] = sum;
    }
    return Object.keys(result).sort().map( key => result[key]);
}

function parsing(records){
    return records.reduce((acc, record) => {
        const [time, number, isEnter] = record.split(' ');
        
        if(!acc[number]) acc[number] = [time];
        else acc[number].push(time);
        return acc;
    },{})
}

function calculateFee(fees, time){
    const [defTime,defFee,unitTime,unitFee] = fees;
    return time <= defTime ? defFee : defFee + (Math.ceil((time-defTime)/unitTime)*unitFee);
}

function calculateTime(start, end){
    const startTime = start.split(':');
    const endTime = end.split(':');

    const [startHour, startMinute] = startTime;
    const [endHour, endMinute] = endTime;
    
    let minute = endMinute - startMinute;
    let hour = endHour - startHour;
    
    // console.log(`${start}~${end} = ${hour}:${minute}`)
    return minute < 0 ? (60*(hour-1) + minute + 60) : (60*hour + minute)
}
