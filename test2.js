function keysAndValues( values){
 
    return [[Object.keys(values)],[Object.values(values)]] ;

  
}
console.log(keysAndValues({a:1 , b:2 , c:3}))
console.log(keysAndValues({a:"Apple" , b:"Microsoft" , c:"Google"}))
console.log(keysAndValues({key1 : true , key2 : false , key3 : undefined}))