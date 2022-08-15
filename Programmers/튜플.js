function solution(s) {
    let array = stringToArr(s).sort(function(a,b){
        if(a.length > b.length) return 1;
        else if (a.length === b.length) return 0;
        else return -1;
    });
    return search(array);
}

function stringToArr(s){
    return s.replace('{{','').replace('}}','').split('},{').map((str) => {
        return str.split(',');
    });
}


function search(array){
    let result = [Number(array[0][0])];
    
    for(let i = 0 ; i < array.length-1; i++){
        let difference = array[i+1].filter(x => !array[i].includes(x))[0];
        result.push(Number(difference));
    }
    return result;
}
