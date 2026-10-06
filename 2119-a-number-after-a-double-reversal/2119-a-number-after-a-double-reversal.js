/**
 * @param {number} num
 * @return {boolean}
 */
// var isSameAfterReversals = function(num) {
//     let original = num;
//     let reverse = 0;
//     while (num > 0){
//         let digit = num%10;
//         reverse = reverse * 10 + digit;
//         num = Math.floor(num/10);
//     }
//     let doubleReverse = String(reverse).split('').reverse().join('')
//     console.log(original, " ", String(reverse).split('').reverse().join(''))
//     return original === Number(doubleReverse)
// };
var isSameAfterReversals = function(num) {
    // last value is not 0 or first is 0 -> true else -> false
    return num === 0 || num % 10 !== 0;
};
