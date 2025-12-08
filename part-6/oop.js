let car = {
  maker: "Toyota",
  model: "Prado",
  year: 2025,
  start: function () {
    return `${this.maker} ${this.model} is a reliable car!`;
  },
};

// console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John", 20);
// console.log(john.name);

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  return `${this.name} makes a sound`;
};

Array.prototype.nazmul = function () {
  return `custom method ${this}`;
};

let myArray = [1, 2, 3];
// console.log(myArray.nazmul());

let myNewArray = [1, 2, 3, 5, 6, 5, 4, 2, 2, 4, 6, 3, 3];
// console.log(myNewArray.nazmul());

class Vehicle {
  constructor(maker, model) {
    this.maker = maker;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.maker}`;
  }
}

class Car extends Vehicle {
  drive() {
    return `${this.maker}: This is an inheritance example`;
  }
}

let myCar = new Car("Toyota", "Prado");
// console.log(myCar.start());
// console.log(myCar.drive());

// Encapsulation

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
// console.log(account.getBalance());

// Abstraction

class CoffeeMachine {
  start() {
    // call DB
    // filter value
    return `Starting the machine....`;
  }
  brewCoffee() {
    //complex calculation
    return `Brewing coffee...`;
  }

  pressStartButton() {
    let msg1 = this.start();
    let msg2 = this.brewCoffee();
    return `${msg1} -> ${msg2}`;
  }
}

let myMachine = new CoffeeMachine();

// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());

// Polymorphism

class Bird {
  fly() {
    return `Flying....`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins can't fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();

// console.log(bird.fly());
// console.log(penguin.fly());

// Static method

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

let miniClac = new Calculator();
// console.log(miniClac.add(2, 3));
// console.log(Calculator.add(2, 3));

// Getters and Setters

class Employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      console.log("Salary can't be negative");
    }
    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    return `You are not allowed to see the salary`;
  }

  set salary(value) {
    if (value < 0) {
      console.log("Invalid Salary");
    } else {
      this._salary = value;
    }
  }
}

let employee = new Employee("Alice", -50000);
// console.log(employee.salary);
employee.salary = -60000;
