let dragon =
    name => 
    size => 
    element =>
    name + " is a " + size + " dragon that breathes " + element + "!";

let output = dragon("Karo")("large")("ice");

console.log(output);

let dragons = [
    {name: 'fluffykins', element: 'light'},
    {name: 'noomi', element: 'light'},
    {name: 'karo', element: 'fire'},
    {name: 'doomer', element: 'earth'}
]

// let hasElement = ((element, obj) => obj.element === element)
// let lightDragons = dragons.filter(x => hasElement('light', x));
// console.log(lightDragons);

const _ = require('lodash')
let hasElement = _.curry((element, obj) => obj.element === element)
let lightDragons = dragons.filter(hasElement('light'));
console.log(lightDragons);