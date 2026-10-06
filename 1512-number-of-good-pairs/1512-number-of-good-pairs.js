/**
 * @param {number[]} nums
 * @return {number}
 */
// var numIdenticalPairs = function(nums) {
//     let count = 0;
//     for(let i=0; i<nums.length; i++){
//         for(let j=i+1; j<nums.length; j++){
//             if(nums[i] === nums[j]){
//                 count++;
//             }
//         }
//     }
//     return count;
// };

var numIdenticalPairs = function(nums) {
    let count = 0;
    let freq = {};
    for (let num of nums){
        if(freq[num]){
            count += freq[num]
        }
        freq[num] = (freq[num] || 0) + 1
    }
    return count
}