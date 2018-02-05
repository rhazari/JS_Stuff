let numbers = [1, 2, 3, 4]
let names = ['Jim', 'Jack', 'Kim', 'Kevin']

let zippedArray = numbers.map((n, index) => [n, names[index]])
console.log(zippedArray);