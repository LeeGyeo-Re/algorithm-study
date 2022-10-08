function solution(orders, course) {
    let result = {};
    let answer = [];
    
    function combination(orderStr, index, r, temp){
        if(r === 0){
            if(!result[temp])
                result[temp] = 1;
            else
                result[temp] ++;
            return ;
        } 
        if(orderStr.length === index){
            return ;
        }
        
        
        let array = Array.from(orderStr).sort();
        combination(orderStr, index+1, r-1, temp+array[index]);
        combination(orderStr, index+1, r, temp)
    }
    
    for(let i = 0 ; i < orders.length; i++){
        result = {};
        for(let j = 0; j < orders.length; j++){
            let orderStr = orders[j];
            let r = course[i];
            
            combination(orderStr, 0, r, '');
        }
        
        const tmp = searchMax(result);
        if(tmp.length > 0)
            answer.push(tmp)
    }
    // console.log(answer.flat().sort())
    
    return answer.flat().sort();
}

function searchMax(obj){
    let result = [];
    let max = 2;
    
    // console.log('obj',obj)
    for(const [key, value] of Object.entries(obj)){
        if(value >= max){
            result = value > max ? [key] : [...result, key]
            max = value;
        }
    }
    
    // console.log('result',result);
    return result;
}
