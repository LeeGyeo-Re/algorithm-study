/**
 * @param {number} n
 * @return {string[]}
 */
var arr;
var generateParenthesis = function(n) {
    arr = [];
    recursive("",0,n);
    return arr;
};

var recursive = function(str, cnt, n){
    if(cnt < 0)
        return ;
    if(str.length == 2*n){
        if(cnt == 0)
            arr.push(str);
        return ;
    }

    recursive(str+"(",cnt+1,n);

    recursive(str+")",cnt-1,n);

}
