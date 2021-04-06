function dropRight(num , num1){
    return num.splice(0,num.length - num1)

}
console.log(dropRight([1,2,3]))
console.log(dropRight([1,2,3] ,2))
console.log(dropRight([1,2,3] ,5))
console.log(dropRight([1,2,3] ,0))
