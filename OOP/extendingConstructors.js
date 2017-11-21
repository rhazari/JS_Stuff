"using strict";

let Mammal = function(legs) {
  this.legs = legs;
};

Mammal.prototype = {
  walk() {
    return "walking";
  },
  sleep() {
    return "sleeping";
  }
};

let Bat = function(legs, canFly) {
  Mammal.call(this, legs);
  this.canFly = canFly;
};

Bat.prototype = Object.create(Mammal.prototype);
Bat.prototype.constructor = Bat;
Bat.prototype.fly = function() {
  return "flying";
};

let fruitBat = new Bat(4, true);

console.dir(fruitBat.sleep());
console.dir(fruitBat.fly());
