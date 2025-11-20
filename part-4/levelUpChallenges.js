/* 
1. Write a 'for' loop that loops through the array ["green tea", "black tea", "chai", "oolong tea"] and stops the lop when it finds 'chai'.
Store all teas before "chai" in a new array named 'selectedTeas'.
*/

// const teas = ["green tea", "black tea", "chai", "oolong tea"];
// const selectedTeas = [];

// for (let i = 0; i < teas.length; i++) {
//   if (teas[i] !== "chai") {
//     selectedTeas.push(teas[i]);
//   } else {
//     break;
//   }
// }

// console.log(selectedTeas);

/*
2. Write a 'for' loop that loops through the array ["London", "New York", "Paris","Berlin"] and skips "Paris".
Store the other cities in a new array named 'visitedCities"
*/

// const cities = ["London", "New York", "Paris", "Berlin"];

// const visitedCities = [];

// for (let i = 0; i < cities.length; i++) {
//   if (cities[i] === "Paris") {
//     continue;
//   }
//   visitedCities.push(cities[i]);
//   //   cities[i] !== "Paris" && visitedCities.push(cities[i]);
// }

// console.log(visitedCities);

/* 
3. Use a 'for-of' loop to iterate through the array [1,2,3,4,5] and stop when the number 4 is found. Store the numbers before 4 in an array named "smallNumbers"
*/

// const numbers = [1, 2, 3, 4, 5];
// const smallNumbers = [];

// for (number of numbers) {
//   if (number === 4) {
//     break;
//   }
//   smallNumbers.push(number);
// }

// console.log(smallNumbers);

/*
4. Use a 'for-of' loop to iterate through the array ["chai","green tea","herbal tea","black tea"] and skip "herbal tea". Store the other teas in an array named preferredTeas.
*/

const allTeas = ["chai", "green tea", "herbal tea", "black tea"];
const preferredTeas = [];

for (tea of allTeas) {
  if (tea === "herbal tea") {
    continue;
  }
  preferredTeas.push(tea);
}

// console.log(preferredTeas);

/* 
5. Use a 'for-in' loop to loop through an object containing city populations. Stop the loop when the population of "Berlin" is found and store all previous cities' population in a new object named 'cityPopulation'.
*/

let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};

let newCityPopulation = {};

for (const city in citiesPopulation) {
  if (city === "Berlin") {
    break;
  }
  newCityPopulation[city] = citiesPopulation[city];
}

/* 
6. Use a 'for-in' loop to loop through an object containing city populations. Skip any city with population below 3 million and store the rest in a new object named "largeCities"
*/

let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};

let largeCities = {};

for (const city in worldCities) {
  if (worldCities[city] < 3000000) {
    continue;
  }
  largeCities[city] = worldCities[city];
  // Left side of = → uses the string in `city` as the NEW property name (creates the key)
  // Right side of = → looks up the population using that same string as key
  //   console.log(largeCities[city]);
  // No "=", so it just reads/gets the value of the property whose name is currently in `city`
}
// console.log(largeCities);

/*
7. Write a 'forEach' loop that iterates through the array ["earl grey", "green tea", "chai", "oolong tea"]. Stop the loop when "chai" is found and store all previous tea types in an array named "availableTeas". 
NOTE: WRONG PROBLEM. forEach CAN'T BE STOPPED. IT WAS DESIGNED TO ITERATE OVER EVERY ELEMENT. JUST USE A DAMN for LOOP.
*/

const teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];

// in forEach a function is must written
teaCollection.forEach((tea) => {
  if (tea === "chai") {
    return; //doesn't really stop the loop, just skips this one.
  }
  availableTeas.push(tea);
});

// console.log(availableTeas);

/* 
8. Write a 'forEach' loop that iterates through the array ["Berlin", "Tokyo", "Sydney", "Paris"]. Skip "Sydney" and store the other cities in a new array named 'traveledCities'.
*/

const cityList = ["Berlin", "Tokyo", "Sydney", "Paris"];
const traveledCities = [];

cityList.forEach((city) => {
  if (city === "Sydney") {
    return;
  }
  traveledCities.push(city);
});

// console.log(traveledCities);

/*
Write a 'for' loop that iterates through the array [2,5,7,9]. Skip the value 7 and multiply the rest by 2. Store the results in a new array named 'doubledNumbers'.
*/

const numbers = [2, 5, 7, 9];
const doubledNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 7) {
    continue;
  }
  doubledNumbers.push(numbers[i] * 2);
}


/* */
