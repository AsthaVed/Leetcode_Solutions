/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count = 0;
   for(let i=0; i<nums.length; i++){
    // console.log(nums[i])
    for(let j=i+1; j<nums.length; j++){
        // console.log(nums[j])
        
        if(nums[i] == nums[j]){
            console.log(nums[i], nums[j])
            count++;
        }
    }
   } 
   return count
};