// Introduction to Objects
// 1. Creating Object Literals
// We fill an object with unordered data. This data is organized into key-value pairs.
// Syntax
let spaceship = {}; // spaceship is an empty object

let fasterShip = {
  "Fuel Type": "Turbo Fuel",
  color: "silver",
};

//   2. Accessing Properties
// There are two ways we can access an object’s property.the first way— dot notation .
"hello".length; // Returns 5

// With property dot notation, we write the object’s name,
// followed by the dot operator and then the property name (key):

let spaceship = {
  homePlanet: "Earth",
  color: "silver",
};
spaceship.homePlanet; // Returns 'Earth',
spaceship.color; // Returns 'silver',

//   Eg. two
let spaceship = {
  homePlanet: "Earth",
  color: "silver",
  "Fuel Type": "Turbo Fuel",
  numCrew: 5,
  flightPath: ["Venus", "Mars", "Saturn"],
};

// Write your code below
const crewCount = spaceship.numCrew;
const planetArray = spaceship.flightPath;

// 3. Bracket Notation
// The second way to access a key’s value is by using bracket notation, [ ].
["A", "B", "C"][0]; // Returns 'A'

// We must use bracket notation when accessing keys that
// have numbers, spaces, or special characters in them.
//  Without bracket notation in these situations, our code would throw an error

let spaceship = {
  "Fuel Type": "Turbo Fuel",
  "Active Duty": true,
  homePlanet: "Earth",
  numCrew: 5,
};
spaceship["Active Duty"]; // Returns true
spaceship["Fuel Type"]; // Returns  'Turbo Fuel'
spaceship["numCrew"]; // Returns 5
spaceship["!!!!!!!!!!!!!!!"]; // Returns undefined

//   ....... Eg 2

let spaceship = {
  "Fuel Type": "Turbo Fuel",
  "Active Mission": true,
  homePlanet: "Earth",
  numCrew: 5,
};

let propName = "Active Mission";

// Write your code below
let isActive = spaceship["Active Mission"];
console.log(spaceship["Active Mission"]);

//   prints true

// 4. Property Assignment
// Once we’ve defined an object, we’re not stuck with all the properties we wrote.
//  Objects are mutable meaning we can update them after we create them!

// We can use either dot notation, ., or bracket notation, [], and the assignment operator,
// = to add new key-value pairs to an object or change an existing property.

// Eg 1
const spaceship = { type: "shuttle" };
spaceship = { type: "alien" }; // TypeError: Assignment to constant variable.
spaceship.type = "alien"; // Changes the value of the type property
spaceship.speed = "Mach 5"; // Creates a new key of 'speed' with a value of 'Mach 5'

// Eg 2
const spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
  mission: "Explore the universe",
};

delete spaceship.mission; // Removes the mission property

//   Eg 3
let spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
  color: "silver",
  "Secret Mission": "Discover life outside of Earth.",
};

// Write your code below
spaceship.color = "glorious gold";
spaceship.numEngines = 5;
delete spaceship["Secret Mission"];

// 5. Methods
// When the data stored on an object is a function we call that a method.
// A property is what an object has, while a method is what an object does.

// We can include methods in our object literals by creating ordinary, comma-separated key-value pairs.
// The key serves as our method’s name, while the value is an anonymous function expression.

// ES6 standards
const alienShip = {
  invade() {
    console.log(
      "Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon."
    );
  },
};
alienShip.invade(); // Prints
//   'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'

// Eg 2
let retreatMessage =
  "We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";

// Write your code below
let alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log("Spim... Borp... Glix... Blastoff!");
  },
};
alienShip.retreat();
alienShip.takeOff();

// prints
// We no longer wish to conquer your planet. It is full of dogs, which we do not care for.
// Spim... Borp... Glix... Blastoff!

//6. Nested Objects
// In application code, objects are often nested— an object might have another
// object as a property which
// in turn could have a property that’s an array of even more objects!

// EXAMPLE
const spaceship = {
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: "Sandra",
      degree: "Computer Engineering",
      encourageTeam() {
        console.log("We got this!");
      },
    },
  },
  engine: {
    model: "Nimbus2000",
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD",
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50,
    },
  },
};
spaceship.nanoelectronics["back-up"].battery; // Returns 'Lithium'

// We can chain operators to access nested properties.
// We’ll have to pay attention to which operator makes sense to use in each layer.
// It can be helpful to pretend you are the computer and evaluate each expression
// from left to right so that each operation starts to feel a little more manageable.

let spaceship = {
  passengers: [{ yearBuilt: 2015 }],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: "Sandra",
      degree: "Computer Engineering",
      encourageTeam() {
        console.log("We got this!");
      },
      "favorite foods": ["cookies", "cakes", "candy", "spinach"],
    },
  },
  engine: {
    model: "Nimbus2000",
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD",
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50,
    },
  },
};

let capFave = spaceship.crew.captain["favorite foods"][0];

let firstPassenger = spaceship.passengers[0];
console.log(firstPassenger);

//   prints { yearBuilt: 2015 } to the console

// 7. Pass By Reference
// Objects are passed by reference.
// This means when we pass a variable assigned to an object into a function as an argument,
// the computer interprets the parameter name as pointing to the space in memory holding that object.
//  As a result, functions which change object properties actually
// mutate the object permanently (even when the object is assigned to a const variable)

// CASE 1
const spaceship = {
  homePlanet: "Earth",
  color: "silver",
};

let paintIt = (obj) => {
  obj.color = "glorious gold";
};

paintIt(spaceship);

spaceship.color; // Returns 'glorious gold

//   CASE 2
let spaceship = {
  homePlanet: "Earth",
  color: "red",
};
let tryReassignment = (obj) => {
  obj = {
    identified: false,
    "transport type": "flying",
  };
  console.log(obj); // Prints {'identified': false, 'transport type': 'flying'}
};
tryReassignment(spaceship); // The attempt at reassignment does not work.
spaceship; // Still returns {homePlanet : 'Earth', color : 'red'};

spaceship = {
  identified: false,
  "transport type": "flying",
}; // Regular reassignment still works.

//   CASE 3
let spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
};

// Write your code below
let greenEnergy = (car) => {
  car["Fuel Type"] = "avocado oil";
};

let remotelyDisable = (obj) => {
  obj.disabled = true;
};
greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);

// returns
// { 'Fuel Type': 'avocado oil',
//   homePlanet: 'Earth',
//   disabled: true }

// 8. Looping Through Objects
// Loops are programming tools that repeat a block of code until a condition is met.
//  We learned how to iterate through arrays using their numerical indexing,
//  but the key-value pairs in objects aren’t ordered!

// syntax
// 1.
for (let variableName in outerObject.innerObject) {
  console.log(
    `${variableName}: ${outerObject.innerObject[variableName].propertyName}`
  );
}

//   syntax 2.
// for (let variableName in outerObject.innerObject) {
//     console.log(`${outerObject.innerObject[variableName].propertyName}: ${outerObject.innerObject[variableName].differentPropertyName}`)
//   };

// CASE 1
let spaceship = {
  crew: {
    captain: {
      name: "Lily",
      degree: "Computer Engineering",
      cheerTeam() {
        console.log("You got this!");
      },
    },
    "chief officer": {
      name: "Dan",
      degree: "Aerospace Engineering",
      agree() {
        console.log("I agree, captain!");
      },
    },
    medic: {
      name: "Clementine",
      degree: "Physics",
      announce() {
        console.log(`Jets on!`);
      },
    },
    translator: {
      name: "Shauna",
      degree: "Conservation Science",
      powerFuel() {
        console.log("The tank is full!");
      },
    },
  },
};

// for...in
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}

//   RETURNS
// captain: Lily
// chief officer: Dan
// medic: Clementine
// translator: Shauna

// ..........................
// CASE 2
let spaceship = {
  crew: {
    captain: {
      name: "Lily",
      degree: "Computer Engineering",
      cheerTeam() {
        console.log("You got this!");
      },
    },
    "chief officer": {
      name: "Dan",
      degree: "Aerospace Engineering",
      agree() {
        console.log("I agree, captain!");
      },
    },
    medic: {
      name: "Clementine",
      degree: "Physics",
      announce() {
        console.log(`Jets on!`);
      },
    },
    translator: {
      name: "Shauna",
      degree: "Conservation Science",
      powerFuel() {
        console.log("The tank is full!");
      },
    },
  },
};

// Write your code below
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}

for (let crewMember in spaceship.crew) {
  console.log(
    `${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`
  );
}

// RETURNS
// captain: Lily
// chief officer: Dan
// medic: Clementine
// translator: Shauna
// Lily: Computer Engineering
// Dan: Aerospace Engineering
// Clementine: Physics
// Shauna: Conservation Science
