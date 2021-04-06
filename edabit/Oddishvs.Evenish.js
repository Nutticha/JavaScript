function oddishOrEvenish(num) {
	return num.toString().trim().split("").reduce((a,b) => parseInt(a) + parseInt(b)) % 2 == 0 ? "Evenish" : "Oddish";
}
console.log(oddishOrEvenish(43));
console.log(oddishOrEvenish(373));
console.log(oddishOrEvenish(4433));