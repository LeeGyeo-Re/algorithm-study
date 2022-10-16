/**
 * @param {number[]} nums
 * @return {boolean}
 */

var visited;

var canJump = function(nums) {
    visited = nums.map(n => {
        return false;
    })
    return solution(nums, 0);
};

var solution = (nums, current) => {
    const canJumpValue = nums[current];
    if(canJumpValue === 0 && current !== nums.length-1) return false;
    if(current === nums.length-1) return true;
    
    for(let i = 1 ; i <= canJumpValue; i++){
        if(!visited[current+i]){
            visited[current+i] = true;
            const result = solution(nums, current+i);
            if(result) return result;  
        }
        
        
    }
    
    return false;
}
