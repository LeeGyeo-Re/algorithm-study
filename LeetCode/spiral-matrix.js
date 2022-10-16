/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    return spiral(matrix)
};
// 방문 했거나 모서리이면 방향 바꾼다
// 방향은 오른쪽, 아래, 왼쪽, 위 순서대로 간다
//

const dx = [0,1,0,-1];
const dy = [1,0,-1,0];

const getDirect = (dir) => {
    return dir%4;
}

const spiral = (matrix) => {
    
    let visited = matrix.map(m => {
        return m.map(item => {
            return false;
        });
    });
    
    let dir = 0;
    let x = 0;
    let y = 0;
    
    let count = 2;
    let result = [matrix[x][y]];
    visited[x][y] = true;
    
    for(let i = 0 ; i < matrix.length; i++){
        for(let j = 0 ; j < matrix[i].length; j++){
            if(i === matrix.length-1 && j === matrix[i].length-1) break;
            if(x+dx[getDirect(dir)] === matrix.length || 
               x+dx[getDirect(dir)] === -1 || 
               y+dy[getDirect(dir)] === matrix[i].length || 
               y+dy[getDirect(dir)] === -1                
              ){
                dir++;
            }
            else if(visited[x+dx[getDirect(dir)]][y+dy[getDirect(dir)]]) {
                dir++;
            }
            const moveX = x+dx[getDirect(dir)];
            const moveY = y+dy[getDirect(dir)];
            
            visited[moveX][moveY] = true;
            result.push(matrix[moveX][moveY]);
            x = moveX; y = moveY;
        }
    }
    return result;
}


