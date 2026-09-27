/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    let num1 = String(num).split('').reverse();   //['6', '2', '5']
    // console.log(num1)
   while(num1[0] === '0'){
    num1.shift();
   }

   let reverse1 = num1.join('');  //625
//    console.log(reverse1)   

   let reverse2 = num1.reverse().join('')
   console.log(reverse2, num)
    if(Number(reverse2) === num){
        return true
    }else{
        return false
    }
};