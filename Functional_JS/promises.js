let isDone = true;

// Promise
let testPromise = new Promise((resolve, reject) =>{
    if(isDone){
        let testParams = {
            x: 10,
            y: 20,
            z: 30
        };
        resolve(testParams);
    }
    else{
        reject(new Error('Task not fulfilled'));
    }
});

let showCordinates = function(points){
    let pointVar =  'x->'+ points.x +'\ny->'+ points.y + '\nz->' + points.z;
    return Promise.resolve(pointVar);
}

// Consuming the Promise
let consumePromise = function(){
    testPromise
        .then(showCordinates)
        .then( obj => console.log(obj))
        .catch( err => console.log(err.message));
};

consumePromise();
