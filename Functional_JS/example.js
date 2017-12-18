let categories = [
    {id: 'animals', 'parent': null},
    {id: 'mammals', 'parent': 'animals'},
    {id: 'cats', 'parent': 'mammals'},
    {id: 'dogs', 'parent': 'mammals'},
    {id: 'chihuahua', 'parent': 'dogs'},
    {id: 'labrador', 'parent': 'dogs'},
    {id: 'persian', 'parent': 'cats'},
    {id: 'siamese', 'parent': 'cats'}
]

let makeTree = (categories, parent) => {
    let node = {}
    categories
    .filter(x => x.parent === parent)
    .forEach(element => {
        node[element.id] = makeTree(categories, element.id);
    });
    return node;
}

console.log(
    JSON.stringify(makeTree(categories, null), null, 2)
);