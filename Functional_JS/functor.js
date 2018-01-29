function stringFunctor(value, fn){
    let charArray = value.split('');
    return charArray.map( c => {
        return String.fromCharCode(fn(c.charCodeAt(0)))
    }).join("");
}

function plus1(value){
    return value + 1;
}

function minus1(value){
    return value - 1;
}

console.log([1,2,3,4,5].map(e => e+1));
console.log(stringFunctor("ABC", plus1));
console.log(stringFunctor("XYZ", minus1));