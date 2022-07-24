/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var result = [];
var obj = {};

var threeSum = function(nums) {
    result = [];
    obj = {};
    // solution(nums, 0, [], 0, 0)
    solution2(nums)
    return result;
};

var solution = function(nums, sum, arr, index, count){
    if(index > nums.length) return ;
    if(count === 3){
        let res = arr.sort();
        if(sum === 0) {
            if(!obj[res.toString()]) {
                obj[res.toString()] = true;
                result.push(res);
            }
        }
        return ;
    }
    
    for(let i = index+1 ; i < nums.length+1; i++){
        let tmp = [...arr];
        solution(nums, sum+nums[index], [...tmp, nums[index]], i, count+1);
        solution(nums, sum, tmp, i, count);
    }
}

var solution2 = function(nums){
    var obj2 = nums.reduce((acc, cur) => {
        if(acc[cur]) acc[cur]++ ;
        else acc[cur] = 1;
        return acc;
    }, {})
    
    for(let i = 0 ; i < nums.length-1; i++){
        if(!obj2[nums[i]]) continue;
        for(let j = i+1 ; j < nums.length; j++){
            if(!obj2[nums[j]]) continue;
            --obj2[nums[i]]; --obj2[nums[j]];
            let tmp = 0 - (nums[i] + nums[j]);
            if(obj2[tmp] && obj2[tmp] > 0) {
                let res = [nums[i],nums[j],tmp].sort();
                // console.log(res)
                if(!obj[res.toString()]) {
                    obj[res.toString()] = true;
                    result.push(res);
                }
            }
            ++obj2[nums[i]]; ++obj2[nums[j]];
        }
    }
}
