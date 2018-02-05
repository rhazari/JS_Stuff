var mixedArray = [1, 2, 'Jim', 'Kim', 4, 'Jack', 5, 'Ryan']

p = x => x.length;

let partitionedArray = mixedArray.reduce(
    (l, r) => {
        if(p(r)){
            l[0].push(r);
        }
        else{
            l[1].push(r);
        }
        return l;
    },
    [[], []]
);

console.log(partitionedArray);