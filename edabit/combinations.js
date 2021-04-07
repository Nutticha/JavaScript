function combinations(items) {
    let total = 1
        for(i=0; i<arguments.length; i++){
            if(Number(arguments[i]) !== 0)
            {total = total * Number(arguments[i])}
        }
        return total
  }
  
  console.log(combinations(2, 3)) 
  console.log(combinations(3, 7, 4))
  console.log(combinations(2, 3, 4, 5))