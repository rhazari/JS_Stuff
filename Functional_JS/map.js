var animals = [
    {name: 'Fluffy', species: 'rabbit'},
    {name: 'Caro', species: 'dog'},
    {name: 'Hamil', species: 'dog'},
    {name: 'Harold', species: 'fish'},
    {name: 'Ursula', species: 'cat'},
    {name: 'Jimmy', species: 'fish'}
]

var animalArray = animals.map(function(x){
    return x.name + ' is a '+ x.species;
})

var animalNames = animals.map(x => x.name);

console.log(animalArray);
console.log(animalNames);