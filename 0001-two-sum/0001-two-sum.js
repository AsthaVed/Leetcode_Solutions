/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 // nums = [1,2,3,4]
 // target = 5  //O(n)
 var twoSum = function(nums, target) {
    const map = {}

    for(let i=0; i<nums.length; i++){
        const complement = target - nums[i]

        if(map[complement] !== undefined){
            return [map[complement], i]
        }

        map[nums[i]] = i
    }
}


 //it takes 33 ms O(n²)
// var twoSum = function(nums, target) {
//     let twoSum = 0;
//     for(let i=0; i<nums.length-1; i++){
//         for(let j=i+1; j<nums.length; j++){
//             twoSum = nums[i]+nums[j];
//             if(twoSum === target){
//                 return [i,j]
//             }
//         }
//     }
// };


//using map function
// var twoSum = function(nums, target) {
//     const map = new Map()
//     for(let i=0; i<nums.length; i++){
//         const complement = target - nums[i];

//         if(map.has(complement)){
//             return [map.get(complement), i]
//         }

//         map.set(nums[i], i);
//     }
// };