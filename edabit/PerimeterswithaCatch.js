function perimeter(l, num){
	return (4*(l=='s')+6.28*(l=='c'))*num;
}
console.log(perimeter("s", 7));
console.log(perimeter("c", 4) );
console.log(perimeter("c", 9));

