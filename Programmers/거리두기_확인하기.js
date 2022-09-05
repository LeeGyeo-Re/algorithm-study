const dx = [0,0,-1,1];
const dy = [-1,1,0,0];

function solution(places) {
    let visit = [];
    function manhattan(distance, x, y, place){
        if(distance > 0 && visit[x][y] === 1) return 1;
        if(distance > 2 || place[x][y] === 'X' ) return 1;
        if(distance > 0 && place[x][y] === 'P') {
            return 0;
        }
        visit[x][y] = 1;
        let temp = 1;
        for(let i = 0 ; i < 4; i++){
            if(validate(x,y,i)){
                temp = manhattan(distance+1, dx[i]+x, dy[i]+y, place)
                if(temp === 0) return 0
            }
        }
        return temp
    }

    function validate(x,y,i){
        return dx[i]+x >= 0 && dx[i]+x < 5 && dy[i]+y >=0 && dy[i]+y < 5;
    }
    const result = places.map(place => {
        const newPlace = place.map(p => [...p]);
        let r = 1;
        visit = Array.from(Array(5), () => Array(5).fill(0));
        for(let i = 0 ; i < 5; i++){
            for(let j = 0 ; j < 5; j++){
                if(newPlace[i][j] === 'P'){
                    visit[i][j] = 1;
                    r = manhattan(0, i, j, newPlace)
                    if(r === 0) return r
                }
                    
            }
        }
        return r;
    })
    
    return result;
}

