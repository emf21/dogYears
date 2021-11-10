// Dog Years
// This project seeks to check the years of users if converted into a dogs age

// setting user age
const myAge = 21;
// setting age at early years of dog
let earlyYears = 2;
earlyYears *= 10.5;

// later dog years
let laterYears = myAge - 2;

// multiplying later dog years by 4
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);

// adding early and later years
const myAgeInDogYears = earlyYears + laterYears;

// changing strings to lower case
const myName = "Success".toLowerCase();

// console logging to get results of dog years
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears}.`
);
