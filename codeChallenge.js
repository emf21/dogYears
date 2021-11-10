//1.  reverseArray()
// Write your code here:
// this code prints an array of words in a reverse way
const reverseArray = (arr) => {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
};

// When you're ready to test your code, uncomment the below and run:

const sentence = ["sense.", "make", "all", "will", "This"];

console.log(reverseArray(sentence));
// Should print ['This', 'will', 'all', 'make', 'sense.'];

//   2. greetAliens()
// greetAliens()
// this is a for loop to print out greetins to each element in the array
// Write your code here:
const greetAliens = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(
      "Oh powerful " + arr[i] + ", we humans offer our unconditional surrender!"
    );
  }
};

// When you're ready to test your code, uncomment the below and run:

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);

//   PRINTS
// Oh powerful Blorgous, we humans offer our unconditional surrender!
// Oh powerful Glamyx, we humans offer our unconditional surrender!
// Oh powerful Wegord, we humans offer our unconditional surrender!
// Oh powerful SpaceKing, we humans offer our unconditional surrender!

// 3. convertToBaby()
// this is to add baby to each element using the for loop and .push method
// Write your code here:
const convertToBaby = (arr) => {
  const babyarr = [];
  for (let i = 0; i < arr.length; i++) {
    babyarr.push("baby " + arr[i]);
  }
  return babyarr;
};

// When you're ready to test your code, uncomment the below and run:

const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];

console.log(convertToBaby(animals));

// 4.  Fix The Broken Code!
// This is a nested loop which calculates the smallest power of two which
// is greater than the current element before using .push() to add it to results.

const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = (arr) => {
  let results = [];
  // The 'outer' for loop:
  for (let i = 0; i < arr.length; i++) {
    number = arr[i];

    // The 'inner' while loop:
    // We needed to create a new variable!
    let j = 1;
    while (j < number) {
      j = j * 2;
    }
    results.push(j);
  }
  return results;
};

console.log(smallestPowerOfTwo(numbers));
// prints [ 8, 4, 16, 32 ]

// 5.  declineEverything() and acceptEverything()
const veggies = ["broccoli", "spinach", "cauliflower", "broccoflower"];

const politelyDecline = (veg) => {
  console.log("No " + veg + " please. I will have pizza with extra cheese.");
};

// Write your code here:
const declineEverything = (arr) => {
  arr.forEach(politelyDecline);
  // console.log(arr.forEach(politelyDecline))
};
const acceptEverything = (arr) => {
  arr.forEach((e) => {
    console.log(`Ok, I guess I will eat some ${e}.`);
  });
};

// 6. squareNums()
// This code maps to (toSquare)

const numbers = [2, 7, 9, 171, 52, 33, 14];

const toSquare = (num) => num * num;

// Write your code here:
const squareNums = (arr) => {
  return arr.map(toSquare);
};

// 7. This is to change strings to uppercase
// shoutGreetings()

// Write your code here:
const shoutGreetings = (arr) => arr.map((word) => word.toUpperCase() + "!");

// Feel free to uncomment out the code below to test your function!

const greetings = ["hello", "hi", "heya", "oi", "hey", "yo"];

console.log(shoutGreetings(greetings));
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]

// 8. sortYears()
// this is the use of the inbuilt .sort() method to sort elements in decending order
// Write your code here:
const sortYears = (arr) => arr.sort((x, y) => y - x);

// Feel free to uncomment the below code to test your function:

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];

console.log(sortYears(years));
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]

// 9. justCoolStuff()
// this is the getting same elements two arrays of strings, and, using the built-in .filter() method,
// Write your code here:
const justCoolStuff = (firstArr, secondArr) =>
  firstArr.filter((item) => secondArr.includes(item));

// Feel free to uncomment the code below to test your function

const coolStuff = [
  "gameboys",
  "skateboards",
  "backwards hats",
  "fruit-by-the-foot",
  "pogs",
  "my room",
  "temporary tattoos",
];

const myStuff = [
  "rules",
  "fruit-by-the-foot",
  "wedgies",
  "sweaters",
  "skateboards",
  "family-night",
  "my room",
  "braces",
  "the information superhighway",
];

console.log(justCoolStuff(myStuff, coolStuff));
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

// PRINTS
// [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

// 10. isTheDinnerVegan()
// The use of the built-in .every() method. to check if statement is true or false (boolean)
// Write your code here:
const isTheDinnerVegan = (arr) => arr.every((food) => food.source === "plant");

// Feel free to comment out the code below to test your function

const dinner = [
  { name: "hamburger", source: "meat" },
  { name: "cheese", source: "dairy" },
  { name: "ketchup", source: "plant" },
  { name: "bun", source: "plant" },
  { name: "dessert twinkies", source: "unknown" },
];

console.log(isTheDinnerVegan(dinner));
// Should print false

// 11. sortSpeciesByTeeth()
// sorts the array in ascending order based on the average number of teeth that species possesses (numTeeth) .
const speciesArray = [
  { speciesName: "shark", numTeeth: 50 },
  { speciesName: "dog", numTeeth: 42 },
  { speciesName: "alligator", numTeeth: 80 },
  { speciesName: "human", numTeeth: 32 },
];

// Write your code here:
const sortSpeciesByTeeth = (arr) =>
  arr.sort(
    (speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth
  );

// Feel free to comment out the code below when you're ready to test your function!

console.log(sortSpeciesByTeeth(speciesArray));

// Should print:
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]

// 12. findMyKeys()
// This is to find the index of an element using built in .findIndex()
// Write your code here:
const findMyKeys = (arr) => arr.findIndex((item) => item === "keys");
//  Feel free to comment out the code below to test your function
const randomStuff = [
  "credit card",
  "screwdriver",
  "receipt",
  "gum",
  "keys",
  "used gum",
  "plastic spoon",
];

console.log(findMyKeys(randomStuff));
// Should print 4

// 13. dogFactory()
// Final solution:
const dogFactory = (name, breed, weight) => {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,
    get name() {
      return this._name;
    },
    set name(newName) {
      this._name = newName;
    },
    get breed() {
      return this._breed;
    },
    set breed(newBreed) {
      this._breed = newBreed;
    },
    get weight() {
      return this._weight;
    },
    set weight(newWeight) {
      this._weight = newWeight;
    },
    bark() {
      return "ruff! ruff!";
    },
    eatTooManyTreats() {
      this._weight++;
    },
  };
};

// Solution to checkpoint 1:
const dogFactory = (name, breed, weight) => {
  return {
    name: name,
    breed: breed,
    weight: weight,
  };
};
//  Solution to checkpoint 2:
const dogFactory = (name, breed, weight) => {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,
    get name() {
      return this._name;
    },
    set name(newName) {
      this._name = newName;
    },
    get breed() {
      return this._breed;
    },
    set breed(newBreed) {
      this._breed = newBreed;
    },
    get weight() {
      return this._weight;
    },
    set weight(newWeight) {
      this._weight = newWeight;
    },
  };
};
