/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let sum = 0;
    for (let i=0; i<s.length; i++){
        const value = 26 - (s.charCodeAt(i) - 97)
        sum += value * (i + 1)
    }
    return sum;
};

// var reverseDegree = function (s) {
//     let reversedAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('').reverse()
//     let result = 0

//     for (let i = 0; i < s.length; i++) {
//         result += (reversedAlphabet.indexOf(s[i]) + 1) * (i + 1)
//     }

//     return result
// };