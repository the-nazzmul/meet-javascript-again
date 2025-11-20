/* Write a 'while' loop that calculates the sum of all members from 1 to 5 and stores the result in a variable names 'sum'.*/

// let sum = 1;
// let i = 1;

// while (i <= 5) {
//   sum += i;
//   i++;
// }

// console.log(sum);

/* Write a 'while' loop that counts down from 5 to 1 and stores the numbers in an array named 'countdown'*/

// let countdown = [];
// let i = 5;

// while (i >= 1) {
//   countdown.push(i);
//   i--;
// }

// console.log(countdown);

/* Write a 'do while' loop that prompts a user to enter their favorite tea type until they enter "Stop". Store each tea type in an array named teaCollection.*/

// let teaCollection = [];
// let tea;

// do {
//   tea = prompt(`Enter your favorite tea (type "stop" to finish): `);

//   if (tea !== "stop") {
//     teaCollection.push(tea);
//   }
// } while (tea !== "stop");

/* write a 'do while' loop that adds numbers from 1 to 3 and stores the result in a variable named 'total'.*/

// let total = 0;
// let i = 1;
// do {
//   total += i;
//   i++;
// } while (i <= 3);

// console.log(total);

/*Write a 'for' loop that multiplies each element in the array [2,4,6] by 2 and store the results in a new array named multipliedNumbers*/

let multipliedNumbers = [];
let numbers = [2, 4, 6];

for (let i = 0; i < numbers.length; i++) {
  multipliedNumbers.push(numbers[i] * 2);
}

// console.log(multipliedNumbers)

/*Write a 'for' loop that lists all the cities in the array ["Paris", "New York", "Tokyo", "London"] and stores each city in a new array named 'cityList' */

let cities = ["Paris", "New York", "Tokyo", "London"];

let cityList = [];

for (index = 0; index < cities.length; index++) {
  cityList.push(cities[index]);
}

console.log(cityList);
