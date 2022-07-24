/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = -1;
    // for(let i = 0 ; i < height.length-1; i++){
    //     for(let j = i+1; j < height.length; j++){
    //         let tempVolume = volume(height, i, j);
    //         if(max < tempVolume) max = tempVolume
    //     }
    // }
    
    let index1 = 0;
    let index2 = height.length-1;
    while(index1 < index2){
        let tempVolume = volume(height, index1, index2);
        if(max < tempVolume) max = tempVolume
        if(height[index1] < height[index2]) index1++;
        else index2--;
    }
    return max;
};

var volume = function(height, index1, index2) {
    return Math.abs(index1-index2) * (height[index1] > height [index2] ? height[index2] : height[index1])
}
