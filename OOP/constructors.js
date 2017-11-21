"use strict";

let Car = function(_color) {
  if (!new.target) {
    throw "Car() must be called with new!";
  }

  this.setColor = color => {
    _color = color;
  };

  this.getColor = () => {
    return _color;
  };
};

let redCar = new Car("red");
console.log("The color of the car is " + redCar.getColor());
