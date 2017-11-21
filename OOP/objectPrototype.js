"use strict";

const Car = function(color) {
  this._color = color;
};

Car.prototype = {
  getColor() {
    return this._color;
  }
};

const ToyCar = function() {};

ToyCar.prototype = Object.create(Car.prototype);

const legoCar = new ToyCar();

console.dir(legoCar instanceof ToyCar);
console.dir(legoCar instanceof Car);
console.dir(legoCar instanceof Object);
