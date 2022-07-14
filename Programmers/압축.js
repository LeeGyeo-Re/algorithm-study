function solution(msg) {
    return sol(msg);
}

function initObj(){
    return {
        A:1,
        B:2,
        C:3,
        D:4,
        E:5,
        F:6,
        G:7,
        H:8,
        I:9,
        J:10,
        K:11,
        L:12,
        M:13,
        N:14,
        O:15,
        P:16,
        Q:17,
        R:18,
        S:19,
        T:20,
        U:21,
        V:22,
        W:23,
        X:24,
        Y:25,
        Z:26
    };
}

function sol(msg) {
    let obj = initObj();
    let len = 26;
    
    let result = [];
    const array = [...msg];
    
    let i = 1;
    let w = array[0];
    let c = array[i];
    while(true){
        if(!obj[c]){
            result.push(obj[w]);
            break;
        }
        if(!obj[w+c]){
            obj[w+c] = ++len;
            result.push(obj[w]);
            w = c;
            c = array[++i];
        }else{
            w = w+c;
            c = array[++i];
        }
    }
    
    return result;
}
