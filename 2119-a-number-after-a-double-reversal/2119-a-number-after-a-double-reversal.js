/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    let num1 = String(num).split('').reverse();   //['6', '2', '5']
   while(num1[0] === '0'){
    num1.shift();
   }

   let reverse1 = num1.join('');  //625 

   let reverse2 = num1.reverse().join('')   //526
    if(Number(reverse2) === num){
        return true
    }else{
        return false
    }
};