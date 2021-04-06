/*function numberSplit(num){
    if(num%2 == 0){
        
        return[num/2 , num/2]
    }
    else{
        return[Math.floor(num/2)   , Math.floor(num/2)  + 1]
    }

}*/

function numberSplit(num){
    return[Math.floor(num/2) , Math.ceil(num/2)]  /* floor ปัดลง ceil ปัดขึ้น   return แบบarray */
}
console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));