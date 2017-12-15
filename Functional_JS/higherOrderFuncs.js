var animals = [
    {name: 'Fluffy', species: 'rabbit'},
    {name: 'Caro', species: 'dog'},
    {name: 'Hamil', species: 'dog'},
    {name: 'Harold', species: 'fish'},
    {name: 'Ursula', species: 'cat'},
    {name: 'Jimmy', species: 'fish'}
]

var isDog = function(animal){
    return animal.species === 'dog';
}

var isNotDog = function(animal){
    return animal.species !== 'dog';
}

// var dogs = animals.filter(function(animal){
//     return animal.species === 'dog';
// })

var dogs = animals.filter(isDog);
var otherSpecies = animals.filter(isNotDog);

console.log(dogs)
console.log(otherSpecies);