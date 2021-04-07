function getFrequencies(arr) {
	let obj = {}; 
 for (let i=0; i<arr.length; i++){
   let element = arr[i]; 
   if (obj[element] !== undefined){
	 obj[element] += 1;
   }
   else {
	 obj[element] = 1; 
   }
 }
 return obj
}
console.log(getFrequencies(["A", "B", "A", "A", "A"]))
console.log(getFrequencies([1, 2, 3, 3, 2]))
console.log(getFrequencies([true, false, true, false, false]))
console.log(getFrequencies([]))