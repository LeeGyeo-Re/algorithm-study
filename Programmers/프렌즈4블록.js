let array = []
let tempArray = [];
let count = 0;
let isNotComplate = true;

function solution(m, n, board) {
    var answer = 0;
    array = board.map(b => [...b]);
    tempArray = Array.from(Array(array.length), () => Array(array[0].length).fill(false));
    
    console.log('array',array);
    
    while(isNotComplate){
        for(let i = 0 ; i < array.length; i++)
            for(let j = 0 ; j < array[0].length; j++)
                deleteBlock(i,j,array[i][j]);
    
        for(let i = 0 ; i < array.length; i++)
            for(let j = array[0].length-1 ; j >= 0; j--)
                down(i,j)
    }
    
    
    console.log('tempArray',array,tempArray, count);
    
    return answer;
}
// 블록 뭉치 제거
function deleteBlock (startX, startY, block) {
    const dx = [0,0,1,1];
    const dy = [0,1,0,1];
    
    isNotComplate = false;
    
    if(checkBlock(startX,startY,block))
        for(let i = 0 ; i < 4; i++){
            if(!tempArray[startX+dx[i]][startY+dy[i]]){
                tempArray[startX+dx[i]][startY+dy[i]] = true;
                count++;
                isNotComplate = true;
            }
        }
}

function checkBlock(x, y, block) {
    const dx = [0,1,1];
    const dy = [1,0,1];
    
    for(let i = 0 ; i < 3; i++)
        if(x+dx[i] >= 0 && y+dy[i] >= 0 && x+dx[i] < array.length && y+dy[i] < array[0].length){
            if(array[x+dx[i]] [y+dy[i]] !== block) return false;
        }else return false;
    return true;
}
// 블록 내리기
function down(x,y){
    let i = 1 ;
    
    while(x+i < tempArray.length && tempArray[x+i][y]){
        array[x+i][y] = ''
        tempArray[x+i][y] = true;
        i++;
    }
    
    const temp = array[x][y]
    array[x][y] = ''
    tempArray[x][y] = true;
    
    array[x+i-1][y] = temp;
    tempArray[x+i-1][y] = false;
}
