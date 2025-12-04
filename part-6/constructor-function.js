function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new Car("Toyota", "Camry");
// console.log(myCar);

let myNewCar = new Car("Toyota", "Prado");
// console.log(myNewCar);

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `This is a cup of ${this.type}`;
  };
}

let lemonTea = new Tea("lemon tea");
// console.log(lemonTea.describe());

function Animal(species) {
  this.species = species;
}

Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};

let dog = new Animal("kutta");
// console.log(dog.sound());

function Drink(type) {
  if (!new.target) {
    throw new Error("Drink should be called with 'New' keyword.");
  }
  this.type = type;
}

let coffee = new Drink("Coffee");
let chai = Drink("Chai");
