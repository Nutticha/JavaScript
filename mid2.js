function highestDigit(num){

   let numarray = num.toString().split("");
   let Maxnum = 0;
   for(var i = 0 ; i < numarray.length ; i++){
       if(Maxnum < numarray[i]){
           Maxnum = numarray[i];
       }
   }
   return Maxnum;
     
    
}
console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));