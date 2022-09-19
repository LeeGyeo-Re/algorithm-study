/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    return resultSudoku(board)
};

const resultSudoku = function(board){
    for(let j = 0; j < center.length; j++){
        const item = center[j];
        const [x,y] = item;
        if(!isValidSquare(board, x, y)) return false;
    }
    
    for(let i = 0 ; i < 9; i++){
        if(!isValidRow(board, i)) return false;
        if(!isValidCol(board, i)) return false;
    }
    return true;
}

const center = [
    [1,1],
    [1,4],
    [1,7],
    [4,1],
    [4,4],
    [4,7],
    [7,1],
    [7,4],
    [7,7],
]

const isValidSquare = function(board, x, y){
    const px = [-1, 0, 1, -1, 0, 1, -1, 0, 1];
    const py = [-1, -1, -1, 0, 0, 0, 1, 1, 1];
    
    // console.log(x, y)
    let array = [];
    for(let i = 0 ; i < 9; i++){
        const num = board[x+px[i]][y+py[i]];
        if(num !== '.') array.push(num);
    }
    return isValid(array);
}

const isValidRow = function(board, x){
    let array = [];
    for(let i = 0 ; i < board[x].length; i++){
        const num = board[x][i];
        if(num !== '.') array.push(num);
    }
    return isValid(array);
}

const isValidCol = function(board, y){
    let array = [];
    for(let i = 0 ; i < board.length; i++){
        const num = board[i][y];
        if(num !== '.') array.push(num);
    }
    return isValid(array);
}

const isValid = function(arr){
    return arr.length === [...new Set(arr)].length;
}
