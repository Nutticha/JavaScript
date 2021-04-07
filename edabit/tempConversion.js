function tempConversion(celsius) {
	let f = ((celsius * 9) /5 )+ 32;
	let k = celsius + 273.15;
	
	if (k < 0){
		return 'Invalid'
	}else if (f !== Math.floor(f)){
		return [+f.toFixed(2), +k.toFixed(2)]
	}else {
		return [f, +k.toFixed(3)]
	}

}
console.log(tempConversion(0))
console.log(tempConversion(100))
console.log(tempConversion(-10))
console.log(tempConversion(300.4))