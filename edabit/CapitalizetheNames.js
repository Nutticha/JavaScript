function capMe(arr) {
	return arr.map(function(x){
		return x[0].toUpperCase() + x.substring(1).toLowerCase()
	})
}
console.log(capMe(["mavis", "senaida", "letty"]))
console.log(capMe(["samuel", "MABELLE", "letitia", "meridith"])) 
console.log(capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]))