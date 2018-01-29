let a, b, c;

let add2Nums = function(x,y){
    return Promise.resolve(x+y);
}

console.log("Starting executing ...")
add2Nums(1,2)
    .then( success => {
        a = success;
        return add2Nums(success, 3);
    })
    .then( success => {
        b = success;
        return add2Nums(success, 4);
    })
    .then( success =>{ 
        c = success;
        return add2Nums(success, 5);
     })
    .then( success => console.log(a, b, c, success));

console.log("Async execution of promises");
