/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let str = num.toString()
    for(let i=0; i<str.length; i++){
        if(str[i] === '6'){
            // str[i] === '9'
            console.log(i)
            console.log(str.substring(0, i))
            console.log(str.substring(i + 1))
            str = str.substring(0, i) + '9' + str.substring(i + 1);
            break;
        }
    }
    return Number(str)
};