/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let count = 0;
    let arr = [...String(num)]
    for (let val of arr){
        if(num%Number(val) === 0){
            count++;
        }
    }
    return count++;
};