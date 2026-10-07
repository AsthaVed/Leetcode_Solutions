/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
// var countOdds = function(low, high) {
//     let count = 0;
//     for(let i=low; i<=high; i++){
//         if(i%2 !== 0){
//             count++;
//         }
//     }
//     return count;
// };

var countOdds = function(low, high) {
    return (Math.floor((high+1)/2) - Math.floor(low/2))
};