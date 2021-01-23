let value01=['Apple',1,false];
let value02=['Fries',2,true];
let value03=['Mars',9,'Apple'];

function check(value01,value02 , value03 ){

    for(let i=0; i< value01.length; i++ ){
        console.log("value01 = ", i ," is ", value01[i], "  type is :  ", typeof(value01[i]) );
    }
    console.log();

    for(let i=0;i<value02.length;i++){
        console.log("value02 = ", i ," is ", value02[i], "  type is :  ", typeof(value02[i]) );
    }
    console.log();
    for(let i=0;i<value03.length;i++){
        console.log("value03 = ", i ," is ", value03[i], "  type is :  ", typeof(value03[i]) );
    }
    console.log();

    for(let i =0; i<value01.length;i++){
    if(typeof(value01[i]) === typeof(value02[i])){
        console.log("value01 is ", value01[i]," \tvalue02 is ", value02[i], " \ttypeof is true");
    }else {
        console.log("value01 is ", value01[i]," \tvalue02 is ", value02[i], " \ttypeof is false");
         }
    }
    console.log();

    for(let i =0; i<value01.length;i++){
        if(typeof(value01[i]) === typeof(value03[i])){
            console.log("value01 is ", value01[i]," \tvalue03 is ", value03[i], " \ttypeof is true");
        }else {
            console.log("value01 is ", value01[i]," \tvalue03 is ", value03[i], " \ttypeof is false");
             }
        }
        console.log();

    for(let i =0; i<value01.length;i++){
        if(typeof(value02[i]) === typeof(value03[i])){
                console.log("value02 is ", value02[i]," \tvalue03 is ", value03[i], " \ttypeof is true");
        }else {
            console.log("value02 is ", value02[i]," \tvalue03 is ", value03[i], " \ttypeof is false");
              }
        }
        console.log();

}

check(value01,value02,value03);