var output = [
  "Mark waffle-iron 80 2",
  "Mark blender 200 1",
  "Mark knife 10 4",
  "Nikita waffle iron 80 1",
  "Nikita knife 10 2",
  "Nikita pot 20 3"
]
  .map(line => line.split(" "))
  .reduce((customer, line) => {
    customer[line[0]] = customer[line[0]] || [];
    customer[line[0]].push({
      item: line[1],
      price: line[2],
      quantity: line[3]
    });
    return customer;
  }, {});

console.log("output", JSON.stringify(output, null, 2));
