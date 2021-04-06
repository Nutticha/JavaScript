function additivePersistence(num,step = 0){
    const data = num.toString().split('').map((i)=>parseInt(i));
    if(data.length > 1){
        const sum = data.reduce((a,b)=> a+b);
        step++;
        additivePersistence(sum,step);
    }
    else {
      console.log(step);
    }
}
console.log(additivePersistence(1679583))
console.log(additivePersistence(123456))
console.log(additivePersistence(6))