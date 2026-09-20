/**
 * @param {number[]} nums
 * @return {number}
 */

 var removeDuplicates = function(nums) {
    const unique = [...new Set(nums)];

    for (let i = 0; i < unique.length; i++) {
        nums[i] = unique[i];
    }

    return unique.length;
};

// var removeDuplicates = function(nums) {
//     const set = new Set(nums);
//     let k = 0;
//     for (const value of set) {
//         nums[k] = value;
//         k++;
//     }
//     return k; 
// };