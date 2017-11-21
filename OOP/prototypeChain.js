"use strict";

const Car = function() {};

Car.prototype = {
  print() {
    return "I am a Car!";
  }
};

const ToyCar = function() {};

ToyCar.prototype = Object.create(Car.prototype);

ToyCar.prototype.print = function() {
  return "I am a Toy Car!";
};

const ToyTransformar = function() {};

ToyTransformar.prototype = Object.create(ToyCar.prototype);

ToyTransformar.prototype.print = function() {
  return "I am a Toy Transformer!";
};

const toyota = new Car();
const legoCar = new ToyCar();
const optimus = new ToyTransformar();

console.log(toyota.print());
console.log(legoCar.print());
console.log(optimus.print());
