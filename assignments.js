"use strict";
/*
// Beginning of values and variables

// let, const and var
const country = "Nigeria";
const continent = "Africa";
// let, const and var

let population = 285.54;

console.log(country);
console.log(continent);
console.log(population);

// End of values and variables assignment

// Beginning of Data Types

// let, const and var
const isIsland = false;
// let, const and var

let language;
// let, const and var
language = "English";
// let, const and var

console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof population);
console.log(typeof country);

// End of Data Types

// Beginning of Basic Operator

// console.log(population / 2); // 109.27 people will live in each half of the country when split

// population++; // increasing population by 1
// console.log(population); // console the result

const finlandPopulation = 6; // population of people in millions
console.log(population > finlandPopulation); // my country population greater than finland

// Conditional(Ternary) Operator to check if population is more than that of another country
population > 33
  ? console.log(
      `${country}'s population is ${population - 33} million above average`
    )
  : console.log(
      `${country}'s population is ${population - 33} million below average`
    );

console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average.`
);

// Conditional(Ternary) Operator



// Beginning of String and Template Literals

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

// End of String and Template Literals

// End of Basic Operator

if (language === "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}


//Equality Operators: == vs. ===
// const numNeighbours = prompt(
// "How many neighbour countries does your country have?"
// );

const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
); // type conversion is needed here because it will help convert prompt which is string to number for it to meet the condition of ===

// === can't do type coercion so it will throw false and move on to the next line
if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}
//Equality Operators: == vs. ===


// Switch statement
const language = "hindi";

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}
// Switch statement
*/

/*
// PART 2

// Functions
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} people and its capital city is ${capitalCity}`;
}

const finlandData = describeCountry("Finland", 6, "Helsinki");
const nigeriaData = describeCountry("Nigeria", 285.64, "Abuja");
const canadaData = describeCountry("Canada", 39.1, "Ottawa");

console.log(`
${finlandData}
${nigeriaData}
${canadaData}
`);



// Functions
const percentageOfWorld1 = (population) => (population / 7900) * 100;

const nigeria = percentageOfWorld1(285.84);
const canada = percentageOfWorld1(35.4);
const italy = percentageOfWorld1(1441);

console.log(`
  Nigeria has 285.84 million people, so it's about ${nigeria}% of the world population

  Canada has 35.4 million people, so it's about ${canada}% of the world population

  Italy has 1441 million people, so it's about ${italy}% of the world population
  `);

// function expression
const percentageOfWorld2 = (population) => (population / 7900) * 100;

const nigeria2 = percentageOfWorld2(85.84);
const canada2 = percentageOfWorld2(350.4);
const italy2 = percentageOfWorld2(141);

console.log(`
  Nigeria has 85.84 million people, so it's about ${nigeria2}% of the world population

  Canada has 350.4 million people, so it's about ${canada2}% of the world population

  Italy has 141 million people, so it's about ${italy2}% of the world population
  `);


// functions calling functions
const percentageOfWorld = (population) =>
  ((population / 7900) * 100).toFixed(1);

function describePopulation(country, population) {
  const countryPercentage = percentageOfWorld(population); // calling the above function

  const countryDetails = `${country} has ${population} million people, which is about ${countryPercentage}% of the world.`;
  return console.log(countryDetails);
}

describePopulation("Italy", 141);
describePopulation("Canada", 35.4);
describePopulation("Nigeria", 285.64);



// Introduction to Arrays
const percentageOfWorld = (population) =>
  Number(((population / 7900) * 100).toFixed(1));

const population = [141, 35.4, 285.64];
population.length === 4 ? console.log("true") : console.log(false);

const percentages = [
  percentageOfWorld(population[0]),
  percentageOfWorld(population[1]),
  percentageOfWorld(population[population.length - 1]),
];
console.log(percentages);



/////////////
// Basic Array Operations(Methods)
const neighbors = ["Benin Republic", "Cameroon", "Chad"];
neighbors.push("Utopia"); // add to end
console.log(neighbors);

neighbors.pop(); // remove from end
console.log(neighbors);

if (!neighbors.includes("Germany"))
  console.log("Probably not a central african country :D");

console.log(neighbors.indexOf("Cameroon"));


neighbors[neighbors.indexOf("Cameroon")] = "Republic of lome";
console.log(neighbors);


////////////
// Introduction to Objects
const myCountry = {
  country: "Nigeria",
  capital: "Abuja",
  language: "English",
  population: 285.64,
  neighbors: ["Benin Republic", "Cameroon", "Chad"],
};

console.log(myCountry);


////////////////////////////////
// Dot vs. Bracket Notation
const myCountry = {
  country: "Nigeria",
  capital: "Abuja",
  language: "English",
  population: 285.64,
  neighbors: ["Benin Republic", "Cameroon", "Chad"],
};

const result = `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`;
console.log(result);

myCountry.population += 2; // plus 2
console.log(myCountry.population);

myCountry["population"] -= 2; // minus 2
console.log(myCountry.population);




//////////////////
// object methods
const myCountry = {
  country: "Nigeria",
  capital: "Abuja",
  language: "English",
  population: 285.64,
  neighbors: ["Benin Republic", "Cameroon", "Chad"],

  describe: function () {
    this.result = `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`;
    return this.result;
  },

  checkIsLand: function () {
    this.isIsLand = this.neighbors.length === 0 ? true : false;
    return this.isIsLand;
  },
};

myCountry.describe();
myCountry.checkIsLand();
console.log(myCountry);


///////////////////////////////
// Iteration: The for Loop

for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting.`);
}



/////////////////////////////
// Looping Arrays, Breaking and Continuing
const population = [141, 35.4, 285.64];
const percentages2 = [];
const percentageOfWorld1 = (population) => (population / 7900) * 100;

for (let i = 0; i < population.length; i++) {
  const percentage = percentageOfWorld1(population[i]);
  percentages2.push(percentage);
}

console.log(percentages2);


////////////////////////////
// Looping Backwards and Loops in Loops

const listsOfNeighbors = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listsOfNeighbors.length; i++) {
  for (let y = 0; y < listsOfNeighbors[i].length; y++) {
    console.log(`Neighbor: ${listsOfNeighbors[i][y]}`);
  }
}



/////////////////////////////
// The while Loop
// const listsOfNeighbors = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];

// let percentage3 = 0;
// while (percentage3 < listsOfNeighbors.length) {
//   let y = 0;
//   while (y < listsOfNeighbors[percentage3].length) {
//     console.log(`Neighbor: ${listsOfNeighbors[percentage3][y]}`);
//     y++;
//   }
//   percentage3++;
// }

const population = [141, 35.4, 285.64];
const percentages3 = [];
const percentageOfWorld1 = (population) => (population / 7900) * 100;

let i = 0;
while (i < population.length) {
  const percentage = percentageOfWorld1(population[i]);
  percentages3.push(percentage);
  i++;
}

console.log(percentages3);



///////////////////////////////
// Developer Skills & Editor Setup
// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!

// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]

const printForecast = function (arr) {
  let add1 = 1;
  let total = "...";
  for (let i = 0; i < arr.length; i++) {
    total += ` ${arr[i]}°C in ${add1 + i} days ...`;
  }
  return console.log(total);
};

const arr = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];
printForecast(arr);
printForecast(arr2);

*/

////////////
// Data Structures, Modern Operators and Strings

const books = [
  {
    title: "Algorithms",
    author: ["Robert Sedgewick", "Kevin Wayne"],
    publisher: "Addison-Wesley Professional",
    publicationDate: "2011-03-24",
    edition: 4,
    keywords: [
      "computer science",
      "programming",
      "algorithms",
      "data structures",
      "java",
      "math",
      "software",
      "engineering",
    ],
    pages: 976,
    format: "hardcover",
    ISBN: "9780321573513",
    language: "English",
    programmingLanguage: "Java",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,

    printBookInfo: function ({ title, author, year = "year unknown" }) {
      console.log(`${title} by ${author}, ${year}`);
    },
  },
  {
    title: "Structure and Interpretation of Computer Programs",
    author: [
      "Harold Abelson",
      "Gerald Jay Sussman",
      "Julie Sussman (Contributor)",
    ],
    publisher: "The MIT Press",
    publicationDate: "2022-04-12",
    edition: 2,
    keywords: [
      "computer science",
      "programming",
      "javascript",
      "software",
      "engineering",
    ],
    pages: 640,
    format: "paperback",
    ISBN: "9780262543231",
    language: "English",
    programmingLanguage: "JavaScript",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ["Randal E. Bryant", "David Richard O'Hallaron"],
    publisher: "Prentice Hall",
    publicationDate: "2002-01-01",
    edition: 1,
    keywords: [
      "computer science",
      "computer systems",
      "programming",
      "software",
      "C",
      "engineering",
    ],
    pages: 978,
    format: "hardcover",
    ISBN: "9780130340740",
    language: "English",
    programmingLanguage: "C",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: "Operating System Concepts",
    author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
    publisher: "John Wiley & Sons",
    publicationDate: "2004-12-14",
    edition: 10,
    keywords: [
      "computer science",
      "operating systems",
      "programming",
      "software",
      "C",
      "Java",
      "engineering",
    ],
    pages: 921,
    format: "hardcover",
    ISBN: "9780471694663",
    language: "English",
    programmingLanguage: "C, Java",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: "Engineering Mathematics",
    author: ["K.A. Stroud", "Dexter J. Booth"],
    publisher: "Palgrave",
    publicationDate: "2007-01-01",
    edition: 14,
    keywords: ["mathematics", "engineering"],
    pages: 1288,
    format: "paperback",
    ISBN: "9781403942463",
    language: "English",
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: "The Personal MBA: Master the Art of Business",
    author: "Josh Kaufman",
    publisher: "Portfolio",
    publicationDate: "2010-12-30",
    keywords: ["business"],
    pages: 416,
    format: "hardcover",
    ISBN: "9781591843528",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: "Crafting Interpreters",
    author: "Robert Nystrom",
    publisher: "Genever Benning",
    publicationDate: "2021-07-28",
    keywords: [
      "computer science",
      "compilers",
      "engineering",
      "interpreters",
      "software",
      "engineering",
    ],
    pages: 865,
    format: "paperback",
    ISBN: "9780990582939",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    publisher: "Grand Central Publishing",
    publicationDate: "2016-01-05",
    edition: 1,
    keywords: ["work", "focus", "personal development", "business"],
    pages: 296,
    format: "hardcover",
    ISBN: "9781455586691",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

// Destructuring Arrays
// console.log(books);

// Destructure the books array into two variables called firstBook and secondBook.
// const [firstBook, SecondBook] = books;
// console.log(firstBook, SecondBook);

// Destructure the books array into a variable called thirdBook. You must skip the first two books.
// const [, , thirdBook] = books;
// console.log(thirdBook);

// Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.

// const ratings = [
//   ["rating", 4.19],
//   ["ratingsCount", 144584],
// ];

// const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings and threeStarRatings. Assign the threeStarRatings variable with a default value of 0.

// const ratingStars = [63405, 1808];

// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

//////////////////////////////////
// Destructuring Objects

// Destructure the first book object from the books array into variables called title, author and ISBN.
// const [firstBook] = books;
// const { title, author, ISBN } = firstBook;
// const { title, author, ISBN } = books[0];
// console.log(title, author, ISBN);

// Each book object has the keywords property. Destructure the first book object from the books array into a variable called tags. The tags variable should be assigned with the value of the keywords property.
// const { keywords: tags } = books[0];
// console.log(tags);

// The seventh book from the books array is missing the programmingLanguage property. Destructure the seventh book object (books[6]) into variables called language and programmingLanguage. Assign the programmingLanguage variable with a default value of 'unknown'.
// const { language, programmingLanguage = "unknown" } = books[6];
// console.log(language, programmingLanguage);

// Below are two variables called bookTitle and bookAuthor. Reassign them with the values of the title and author properties of the first book object from the books array.
// let bookTitle = "unknown";
// let bookAuthor = "unknown";

// ({ title: bookTitle, author: bookAuthor } = books[0]);
// console.log(bookTitle, bookAuthor);

// Each book object has a deeply nested rating property as illustrated below:

/* Destructure the first book object from the books array into a variable called bookRating. In the result of your destructuring, the bookRating variable should be assigned with the value of the book[0].thirdParty.goodreads.rating property.

Please do most of the work on the left side of the assignment operator: const ... = books[0];
*/

// const {
//   thirdParty: {
//     goodreads: { rating: bookRating },
//   },
// } = books[0];
// console.log(bookRating);

// Write a function called printBookInfo that has three parameters called title, author and year. This function should work for a single object passed as an argument, and it should log to the console information about the book in this format: "${title} by ${author}, ${year}".

// If year is undefined (was not passed), it should be assigned with a default value of 'year unknown'.

// books[0].printBookInfo({
//   title: "Algorithms",
//   author: "Robert Sedgewick",
//   year: "2011",
// });

// books[0].printBookInfo({ title: "Algorithms", author: "Robert Sedgewick" });

///////////////////////////////////
// Spread Operator

/* Each book object has the author property, which stores an array of strings (author names) if there are multiple authors, or a single string (author name) if there is just one author.

Declare an array called bookAuthors, and fill it with authors of the first two books from the books array. The bookAuthors array should have just one level (no nested arrays).
*/
// console.log(books[0].author, books[1].author);
// const bookAuthors = [...books[0].author, ...books[1].author];
// console.log(...bookAuthors);

// Write a function called spellWord that accepts a single string as an argument. This function should log to the console each letter of the argument separated by a space.

// const spellWord = (arr) => console.log(...arr);
// spellWord("JavaScript");

///////////////////////////////
// Rest Pattern and Parameters

/*
Destructure the keywords property (array) of the first book from the books array into variables called mainKeyword and rest. The first keyword should be assigned to mainKeyword, and the rest of the keywords should be assigned to the rest variable (it should be an array).
*/

// const [mainKeyword, ...rest] = books[0].keywords;
// console.log(mainKeyword, rest);

/*
Destructure the second book from the books array into a variable called bookPublisher. The bookPublisher variable should be assigned with the value of the publisher property of the book object. Assign the rest of the properties to the restOfTheBook variable.
*/
// const { publisher: bookPublisher, ...restOfTheBook } = books[1];
// console.log(bookPublisher, restOfTheBook);

/* 
Write a function called printBookAuthorsCount that has two parameters called title and authors. The authors parameter should accept any number of arguments. This function should log to the console a string formatted like that: "The book "${title}" has ${authors.length} authors".
*/

// const printBookAuthorsCount = (title, ...authors) => {
//   console.log(`The book ${title} has ${authors.length} authors`);
// };

// printBookAuthorsCount("Algorithms", "Robert Sedgewick", "Kevin Wayne");

///////////////////////////////////
// Short Circuiting (&& and ||)

/* Some of the book objects have the programmingLanguage property, which specifies what programming language is used in the book, for example
Write a function called hasExamplesInJava that takes a book object from the books array as an argument. This function should return true if the book uses Java, or a string 'no data available' if it uses other language or no programming language at all. Use short-circuiting.
*/

// const hasExamplesInJava = (book) => {
//   return console.log(
//     book.programmingLanguage === "Java" || "no data available"
//   );
// };
// hasExamplesInJava(books[1]);

// Some of the book objects have the onlineContent property, which is either true or false. Loop over the books array, and for the books that provide online content, log to the console a string in this format: "${title}" provides online content. Use short-circuiting.

// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent &&
//     console.log(`${books[i].title} provides online content`);
// }

// 1)
/* 
Authentication System: Implement an authentication function that checks if the username and password entered by a user match the stored username and password. Use short-circuiting to return false as soon as one of the conditions is not met.
// */
// function authenticator(username, password) {
//   const storedUsername = "PrimeXV";
//   const storedPassword = "billyjean67";
//   return (
//     (username === storedUsername && password === storedPassword) ||
//     "Authentication error, Try Again"
//   );
// }
// console.log(authenticator("PrimeXV", "denver345"));

// 2)
/* 
Online Shopping Cart: Write a function that checks if a user’s shopping cart has items and if the user has enough balance in their account to purchase the items. Use short-circuiting to return false as soon as one of the conditions is not met.
*/

// const checkItemsInCart = (items, accountBalance) => {
//   // Define prices for each items
//   const prices = { biscuit: 50, milk: 30, sugar: 20, drugs: 1000 };

//   // Calculate the total cost of items in the cart
//   const calculateTotal = (prices) => {
//     let total = 0;
//     for (let item of items) {
//       total += prices[item];
//     }
//     return console.log(total);
//   };

//   return (
//     (items.length >= 1 && accountBalance >= calculateTotal(prices)) ||
//     "Cart or balance is empty, Try again"
//   );
// };

// console.log(checkItemsInCart(["biscuit", "milk", "sugar", "drugs"], 1000));

// 3)

/* 
Traffic Light System: Write a program that simulates a traffic light system at a pedestrian crossing. The system should check if the traffic light is red and if there are pedestrians waiting to cross. Use short-circuiting to stop the traffic as soon as both conditions are met.
*/

// const trafficLightSystem = function (trafficLightColor, isPedestrianWaiting) {
//   return (
//     (trafficLightColor === "red" && isPedestrianWaiting === "yes" && "Stop") ||
//     "Traffic light isn't red and Pedestrians aren't waiting, Keep driving!"
//   );
// };
// console.log(trafficLightSystem("red", "yes"));

// 4)

/*
Banking System: Implement a function in a banking system that checks if an account is active and if the account has sufficient funds before processing a withdrawal request. Use short-circuiting to decline the transaction as soon as one of the conditions is not met.
*/

// const bankingSystem = (accountStatus, accountBalance) => {
//   const withdrawalAmount = 2000;
//   return (
//     (accountStatus === "active" &&
//       accountBalance >= withdrawalAmount &&
//       "Processing withdrawal...") ||
//     "Transaction Declined, Try again!"
//   );
// };
// console.log(bankingSystem("active", 20));

// 5)

/*
Temperature Control System: Write a program for a temperature control system that checks if the current temperature is above a certain threshold and if the air conditioning system is working. Use short-circuiting to turn on the air conditioning as soon as both conditions are met.
*/

// function temperatureControlSystem(
//   currentTemperature,
//   thresholdTemperature,
//   isAcWorking
// ) {
//   return currentTemperature > thresholdTemperature && isAcWorking === "yes"
//     ? "AC Switched on"
//     : "Current Temperature is okay! or AC as developed an issue!";
// }
// console.log(temperatureControlSystem(40, "yes"));

// 6)

/*
Email Notification System: Implement an email notification system that checks if a user has new emails and if the user has enabled email notifications. Use short-circuiting to send a notification as soon as both conditions are met.
*/

// const shouldSendNotification = (hasNewEmail, isNotificationEnabled) => {
//   return (
//     (hasNewEmail === "yes" &&
//       isNotificationEnabled === "yes" &&
//       "Registered new user and notification enabled!") ||
//     "Notification disabled or Old User Emails"
//   );
// };
// console.log(shouldSendNotification("yes", "yes"));

// 7)

/*
Flight Booking System: Write a function in a flight booking system that checks if a flight is available and if the user has enough points for a free flight. Use short-circuiting to book the flight as soon as both conditions are met.
*/

// const bookFlight = (isFlightAvailable, userPoints) => {
//   const requiredPoints = 1000;
//   return isFlightAvailable === "yes" && userPoints >= requiredPoints
//     ? "Passed! Free flight booked."
//     : "Unavailable flight or low user points, Try next time!";
// };
// console.log(bookFlight("yes", 1000));

// 8)

/*
Food Delivery App: Implement a function in a food delivery app that checks if a restaurant is open and if the user’s delivery address is within the restaurant’s delivery radius. Use short-circuiting to place the order as soon as both conditions are met.
*/

// function deliverFood(isRestaurantOpen, userDeliveryAddress) {
//   const restaurantDeliveryRadius = 300;
//   return isRestaurantOpen === "yes" &&
//     userDeliveryAddress <= restaurantDeliveryRadius
//     ? "Place order!"
//     : "Restaurant closed or far distance from restaurant!";
// }
// console.log(deliverFood("yes", 200));

///////////////////////////////
// Nullish  Coalescing Operator

// There are objects in the books array that don't have the onlineContent property at all. Loop over the books array, and log a string to the console in this format: "${title}" provides no data about its online content.

// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent ??
//     console.log(`${books[i].title} provides no data about its online content.`);
// }

/* 
User Preferences:
You’re building a user profile system for an app. Users can set their preferred language, but it’s optional. If a user hasn’t specified a language, you want to default to English.
Create a function that takes a user object as input and returns their preferred language (or “English” if not specified) using the nullish coalescing operator.
*/

// const drey = {
//   language: "yoruba",
//   food: "amala",
//   song: "simi",
// };

// const setPreferredLanguage = (userObject) => {
//   console.log(userObject.language ?? "English");
// };
// setPreferredLanguage(drey);

/*
Product Pricing:
Imagine you’re working on an e-commerce website. Each product has a base price, but some products might have a discount. If a product doesn’t have a discount, you want to display the base price.
Write a function that calculates the final price of a product, considering the discount (if available) or using the base price as fallback.
*/

// const sweet = {
//   basePrice: 12,
//   discount: 0.4,
// };

// const totalProductPrice = (product) => {
//   const calculate = () => {
//     return Math.round(product.basePrice - product.basePrice * product.discount);
//   };

//   console.log((product.discount && calculate()) ?? product.basePrice);
// };
// totalProductPrice(sweet);

//////////////////////////////
// Logical Assignment Operator ( AND assignment(&&=), OR assignment(||=) and Nullish assignment(??=))

/*
Some of the book objects from the books array are missing the edition property. Loop over the books array, and assign this property with a number 1 (if it doesn't already exist). Use logical assignment operators.
*/

// for (let i = 0; i < books.length; i++) {
//   books[i].edition ||= console.log(1);
// }

/*
Some of the book objects from the books array have the highlighted property, which by default is set to true. Iterate over the books array, and if the thirdParty.goodreads.rating property is less than 4.2, reassign it with false.
Use the &&= operator (tip: you may also need the ! operator)
*/

// for (let i = 0; i < books.length; i++) {
//   books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
// }

/*
AND Assignment (&&=):
Scenario: Imagine a delivery service app that assigns delivery drivers to specific routes based on their availability and vehicle type.
Question: How can you use the &&= operator to update a driver’s route assignment only if they are available and have a suitable vehicle (e.g., a truck for heavy items)?
Hint: Think about how you can combine availability and vehicle type conditions using &&=.
*/

const driverDetail = [
  {
    name: "Hassan",
    available: true,
    vehicleType: "truck",
    routeAssignment: "Route A",
  },

  {
    name: "Jude",
    available: true,
    vehicleType: "Ford",
    routeAssignment: "Route B",
  },

  {
    name: "Eniola",
    available: false,
    vehicleType: "Rolls-Royce",
    routeAssignment: "Route A",
  },
];

// const assignDriver = (check) => {
//   check.available &&=
//     check.vehicleType === "truck"
//       ? `Passed! ${check.name} should pass Route A.`
//       : `${check.name} is not available and ${check.vehicleType} is not suitable to load the items.`;
//   return console.log(check.available);
// };
// assignDriver(driverDetail[2]);

/*
OR Assignment (||=):
Scenario: Consider a user profile management system for an online platform. Users can choose to provide additional contact information (such as phone numbers or alternative email addresses).
Question: How can you use the ||= operator to ensure that a user’s profile includes an alternative email address if they haven’t already provided one?
Hint: Consider how you can update the user’s profile with an alternative email address only if it’s not already present.
*/

const user = [
  {
    name: "Hassan",
    // phoneNumber: +2348143299726,
    alternativeEmailAddress: "olamilekanni43@gmail.com",
  },

  {
    name: "Benson",
    phoneNumber: +2348143296,
    // alternativeEmailAddress: "olamilekanni43@gmail.com",
  },
];

// function userProfileManagementSite(check) {
//   check.alternativeEmailAddress ||= `Missing Backup email, Try again! ${check.name}`;
//   check.phoneNumber ||= `Missing Backup Phone Number, Try again! ${check.name}`;
//   return (
//     console.log(check.alternativeEmailAddress), console.log(check.phoneNumber)
//   );
// }
// userProfileManagementSite(user[1]);

/*
Nullish Assignment (??=):
Scenario: Suppose you’re building a weather app that displays the current temperature. However, some locations may not have real-time temperature data available.
Question: How can you use the ??= operator to set a default temperature value (e.g., 20°C) for locations where the actual temperature data is null or undefined?
Hint: Think about how you can handle missing temperature data using the nullish assignment operator.
*/

const locat = [
  {
    name: "aja",
    // temperature: "100°C",
    rainfall: "high",
  },

  {
    name: "Dreams",
    temperature: 0,
    rainfall: "low",
  },

  {
    name: "Demons",
    temperature: "100°C",
    rainfall: "average",
  },
];

// function displayCurrentTemperature(checkTemp) {
//   checkTemp.temperature ??= `${checkTemp.name} area weather temperature is 20°C`;
//   return console.log(checkTemp.temperature);
// }
// displayCurrentTemperature(locat[0]);

////////////////////////////////////////
// Looping Arrays: The for-of Loop

/*
Use the for-of loop to loop over the books array and sum the pages of all books. Use the pageSum variable below, and the pages property of the book objects
*/
// let pageSum = 0;
// for (let book of books) {
//   pageSum += book.pages;
// }
// console.log(pageSum);

/*
Below is the allAuthors variable which stores an empty array. Use the for-of loop to fill allAuthors with the authors of each book from the books array.
Remember that each book object has the author property, which can be a string (if there is only a single author) or an array (if there are multiple authors). You may need to use the typeof operator. You can also use multiple loops if needed. The allAuthors array should have just one level (no nested arrays).
*/

// let allAuthors = [];

// for (const book of books) {
//   // console.log(book.author);
//   if (typeof book.author === "string") {
//     allAuthors.push(book.author);
//     // console.log(book.author);
//   } else {
//     for (const author of book.author) {
//       // console.log(author);
//       allAuthors.push(author);
//     }
//   }
// }
// console.log(allAuthors);
// const [...me] = [...allAuthors];
// console.log(me);

/*
Use the for-of loop together with Array's entries() method to log each author from allAuthors to the console together with its index. Make the index start from 1, instead of 0.
*/

// for (const [i, author] of allAuthors.entries()) {
//   console.log(`${i + 1}) ${author}`);
// }

/////////////////////////
// Enhanced Object Literals
/*
Below is the bookData array that contains other arrays. Each inner array consists of the property name (first element), and the value (second element). For example, in ['title', 'Computer Networking: A Top-Down Approach'], 'title' is the property name, and 'Computer Networking: A Top-Down Approach' is meant to be the value assigned to that property name.
Using computed properties, fill the newBook object with the properties and values from the bookData array. The first one is done already.
*/

const bookData = [
  ["title", "Computer Networking: A Top-Down Approach"],
  ["author", ["James F. Kurose", "Keith W. Ross"]],
  ["publisher", "Addison Wesley"],
];

// Do the rest
// const newBook = {
//   [bookData[0][0]]: bookData[0][1],
//   [bookData[1][0]]: bookData[1][1],
//   [bookData[2][0]]: bookData[2][1],
// };
// console.log(newBook);

/*
Below is the pages variable. Add it as a property of the newBook2 object. Use the shorter way.
*/

const pages = 880;

const newBook2 = {
  title: "The C Programming Language",
  author: ["Brian W. Kernighan", "Dennis M. Ritchie"],
  pages,
};
// console.log(newBook2);

/////////////////////////////
// Optional Chaining (?.)

/*
Write a function called getFirstKeyword that takes the book object as an argument. This function should return the first keyword from the book's keywords property (array) or undefined (if the keywords property doesn't exist). It shouldn't throw an error. Use optional chaining for that.
*/

const getFirstKeyword = (books) => {
  // let index = 1; // initialized counter
  // for (const book of books) {
  // console.log(`${index})  ${book.keywords?.[0] ?? "Keyword doesn't exist!"}`);
  return console.log(books.keywords?.[0] ?? "Keyword doesn't exist!");
  // index++;
  // }
};
// getFirstKeyword(newBook2);

///////////////////////////////////////
// Looping Objects: Object Keys, Values and Entries

/*
Below is the entries variable that stores an empty array. Use the for-of loop together with the Object.keys() method to loop over the thirdParty.goodreads property (array) of the first book object from the books array. For each key, push a new array that contains that key to the entries array.
In the end, the entries array should be filled with arrays containing keys:
*/

let entries = [];

const goodReads = Object.keys(books[0].thirdParty.goodreads);
// console.log(goodReads);

for (const key of goodReads) {
  entries.push([key]);
}
// console.log(entries);

/*
The Object.values() method returns an array, which means you can call the Array's entries() method on it, for example, Object.entries(books[0].thirdParty.goodreads).entries(). The Array's entries() method returns [index, value] arrays for each element in the array.

Use the for-of loop together with the Object.values() method and Array's entries() method to loop over thirdParty.goodreads property of the first book from the books array.

Push each value to the appropriate inner array in the entries array (use index from entries()).
*/

const values = Object.values(books[0].thirdParty.goodreads);
// console.log(values);

for (const [key, value] of values.entries()) {
  entries[key].push(value);
}
// console.log(entries);

/*
Use the Object.entries() method on the thirdParty.goodreads property of the first book from the books array. Assign the returned value to the variable called entries2.
*/

const entries2 = Object.entries(books[0].thirdParty.goodreads);
// console.log(entries2);

/*
Log the entries and entries2 variables to the console, and compare them. They should look the same.
*/

// console.log(entries, entries2);

/*
Problem 1: Calculating Total Scores
Description: Given an object representing students and their scores in various subjects, calculate the total score for each student and store the results in a new object.
*/

const studentScores = {
  Alice: { math: 90, science: 85, literature: 88 },
  Bob: { math: 72, science: 80, literature: 78 },
  Charlie: { math: 95, science: 92, literature: 90 },
};

// Your task is to create a new object, `totalScores`, that contains the total score for each student.
let totalScores = {};

for (const [key, value] of Object.entries(studentScores)) {
  let addScore = 0;
  for (const score of Object.values(value)) {
    addScore += score;
  }
  totalScores[key] = addScore;
  // console.log(`The total score of ${key} is ${addScore}`);
}
// console.log(totalScores);

/*
Problem 2: Finding the Oldest Person
Description: Given an object representing a list of people and their ages, find the name of the oldest person.
*/

const peopleAges = {
  John: 45,
  Sarah: 52,
  Kate: 38,
  Mike: 57,
  Emma: 42,
};

// Your task is to find the name of the oldest person in the `peopleAges` object.
const findTheOldestPerson = (peopleAges) => {
  let highestKey;
  let highestValue = -Infinity;

  for (const [name, value] of Object.entries(peopleAges)) {
    if (value > highestValue) {
      highestValue = value;
      highestKey = name;
    }
  }
  return console.log(`${highestKey} is the oldest person at ${highestValue}`);
};
// findTheOldestPerson(peopleAges);

/*
Problem 3: Filtering Properties by Value
Description: Given an object representing items and their prices, filter out the items that are above a certain price threshold and store the result in a new object.
*/

const itemsPrices = {
  apple: 1.2,
  banana: 0.8,
  orange: 1.5,
  mango: 2.0,
  grape: 1.8,
};

const priceThreshold = 1.5;

// Your task is to create a new object, `filteredItems`, that contains only the items with prices above `priceThreshold`.

const filteredItems = {};

for (const [item, price] of Object.entries(itemsPrices)) {
  if (price > priceThreshold) filteredItems[item] = price;
}
// console.log(filteredItems);

//////////////////////////////////
// sets

/*
Below is the allKeywords variable, which stores an empty array. Loop over the books array, and fill the allKeywords array with the keywords coming from the keywords property of each book object. The allKeywords array should have just one level (no nested arrays).

Use whatever loop and methods you want. You can also use the spread syntax. In the end, the allKeywords array should look more or less like this: ['computer science', 'programming', 'algorithms', 'data structures', ...].
*/

const allKeywords = [];
for (const book of books) {
  // console.log(book.keywords);
  // for (const keyword of Object.values(book.keywords)) {
  // allKeywords.push(keyword);
  allKeywords.push(...book.keywords);
  // }
}
// console.log(allKeywords);

/*
The allKeyword array contains duplicates. Remove them by creating a Set out of that array. Assign the newly created set to the uniqueKeywords variable.
*/
const uniqueKeywords = new Set(allKeywords);
// console.log(uniqueKeywords);

/*
Add two more keywords to the uniqueKeywords set, for example, 'coding' and 'science'.
*/

uniqueKeywords.add("coding");
uniqueKeywords.add("science");
// console.log(uniqueKeywords);

/*
Delete 'business' from the uniqueKeywords set.
*/

uniqueKeywords.delete("business");
// console.log(uniqueKeywords);

/*
Create an array out of the uniqueKeywords set, and assign it to the uniqueKeywordsArr variable.
*/

const uniqueKeywordsArr = [...uniqueKeywords];
// console.log(uniqueKeywordsArr);

/*
Delete all items from the uniqueKeywords set.
*/

uniqueKeywords.clear();
// console.log(uniqueKeywords);

////////////////////////////
// Maps: Fundamentals

// Create a new book, but this time, as a Map. Assign it to the bookMap variable. Use this array as initial data:

[
  ["title", "Clean Code"],
  ["author", "Robert C. Martin"],
];

const bookMap = new Map([
  ["title", "Clean Code"],
  ["author", "Robert C. Martin"],
]);
// console.log(bookMap);

// Set a new key in bookMap called pages, and assign it with a number 464.
// console.log(bookMap.set("pages", 464));

// Get the title and author values from bookMap, and log to the console a string formatted like that: "${title} by ${author}".

// console.log(`${bookMap.get("title")} by ${bookMap.get("author")}`);

// Get the size of bookMap, and log it to the console.
// console.log(bookMap.size);

// Check if bookMap has the author key. and if so, log "The author of the book is known" to the console.
// bookMap.has("author") && console.log("The author of the book is known");

/////////////////////////////////////////////////
// Maps: Iteration

// Convert the first book object from the books array into a Map, and assign it to a firstBookMap variable.
const firstBookMap = new Map(Object.entries(books[0]));
// console.log(firstBookMap);

// Use the for-of loop to iterate over firstBookMap, and log to the console keys that have numbers as values.
for (const [keysWithNumberValue, value] of firstBookMap) {
  // console.log(value);
  // if (typeof value === "number") console.log(keysWithNumberValue);
}

/*
Problem 1: Counting Word Frequencies
Description: Given a string of text, count the frequency of each word and store the results in a Map. Ignore punctuation and consider case-insensitivity (e.g., "Word" and "word" should be counted as the same word).
*/
const text = "Hello world! This is a test. This test is only a test.";
// Your task is to count the frequency of each word in the `text` and store it in a Map.
const countFrequency = (text) => {
  const countFrequency = new Map();
  const words = text.toLowerCase().match(/\b\w+\b/g);

  for (const word of words) {
    if (countFrequency.has(word)) {
      countFrequency.set(word, countFrequency.get(word) + 1);
    } else {
      countFrequency.set(word, 1);
    }
  }
  return countFrequency;
};
const wordFrequencies = countFrequency(text);
// console.log(wordFrequencies);

/*
Problem 2: Grouping Items by Category
Description: Given an array of items where each item has a name and a category, group the items by their categories and store the results in a Map. Each category should map to an array of item names.
*/
const items = [
  { name: "Apple", category: "Fruit" },
  { name: "Banana", category: "Fruit" },
  { name: "Carrot", category: "Vegetable" },
  { name: "Broccoli", category: "Vegetable" },
  { name: "Chicken", category: "Meat" },
];
// Your task is to group the items by their categories and store the results in a Map.
const itemsGroupedByCategories = (items) => {
  const categoryMap = new Map();

  for (const { name, category } of items) {
    if (categoryMap.has(category)) {
      categoryMap.get(category).push(name);
    } else {
      categoryMap.set(category, [name]);
    }
  }
  return categoryMap;
};
const groupedItems = itemsGroupedByCategories(items);
// console.log(groupedItems);

/*
Description: In a web application, manage user sessions using a Map where each key is a user ID and each value is an object containing session details (e.g., login time, session token). Write a function to log out a user by removing their session from the Map.
*/
const userSessions = new Map([
  ["user1", { loginTime: "10:00 AM", sessionToken: "abc123" }],
  ["user2", { loginTime: "10:05 AM", sessionToken: "def456" }],
  ["user3", { loginTime: "10:10 AM", sessionToken: "ghi789" }],
]);
// Your task is to write a function `logoutUser(userId)` that removes the session for the given `userId` from the `userSessions` Map.

const logoutUser = (userId) => {
  if (userSessions.has(userId)) {
    userSessions.delete(userId);
    console.log(`${userId} has been logged out!`);
  } else {
    console.log(`${userId} not found!`);
  }
};
// logoutUser("user3");

////////////////////////////////////////////
// Working with Strings: Part1

/*
Take the ISBN property of the first book from the books array, and log to the console characters at index 6, 4, 9 and 8. Use bracket notation to access individual characters.
*/
// console.log(
//   books[0].ISBN[6],
//   books[0].ISBN[4],
//   books[0].ISBN[9],
//   books[0].ISBN[8]
// );

/*
Below is the quote variable that stores a string. Find the index of the word 'chess', and log it to the console.
*/
const quote =
  "A computer once beat me at chess, but it was no match for me at kick boxing";
// console.log(quote.indexOf("chess"));

/*
Extract the word "boxing" from the same quote string, and log it to the console.
*/
// console.log(quote.slice(quote.indexOf("boxing")));
// console.log(quote.slice(quote.lastIndexOf(" ") + 1));

/*
Some authors are noted as "(Contributor)", for example "Julie Sussman (Contributor)". Create a function called isContributor that takes an author's name as an argument, and returns either true (if he's a contributor) of false (if he's not a contributor). The string "(Contributor)" is always the last part of the author's name string.
*/
const isContributor = (authorsName) => {
  authorsName.lastIndexOf("(Contributor)") !== -1
    ? console.log(`Yes! ${authorsName} is a contributor.`)
    : console.log(`${authorsName} is not a contributor.`);
};
// isContributor("Julie Sussman (Contributor)");
// isContributor("Robert Sedgewick");

//// Example
const str = "Hello, World!";
// console.log(str.slice(str.indexOf("World"), str.indexOf("!")));

const js = "JavaScript is awesome";
// console.log(js.indexOf("a"));

const fruit = "banana";
// console.log(fruit.lastIndexOf("a"));

/////////////////////////////////
// Working with Strings - Part 2

/*
Write a function called normalizeAuthorName that takes an author's name (string) as an argument, and returns the same string, but the first name and last name are capitalized, and the "(Contributor)" part is removed (if exists).

You can be sure that the author's name always consists of two words separated by a space, and possibly ends with "(Contributor)". The string may also contain trailing spaces.
*/
const normalizeAuthorName = (author) => {
  const newAuthor = author.trim().toLowerCase(); // trim and convert to lowercase
  let run; // create a variable to store result from if statement so they can be used later
  if (newAuthor.includes("(contributor)")) {
    const sed = newAuthor.slice(0, newAuthor.indexOf("(contributor)")); // remove "(Contributor)"
    run = sed; // Assign sed to run
  } else {
    run = newAuthor; // Assign newAuthor to run
  }

  const firstName = run.slice(0, run.indexOf(" ")); // remove last name
  const lastName = run.slice(run.indexOf(" ") + 1, run.length); // remove first name

  // change first letter in both names to uppercase then concatenate them with space in between
  const finalName =
    firstName[0].toUpperCase() +
    firstName.slice(1) +
    " " +
    lastName[0].toUpperCase() +
    lastName.slice(1);

  return finalName; // return final name
};

// console.log(normalizeAuthorName("  JuliE sussMan "));
// console.log(normalizeAuthorName("  JuliE sussMan (Contributor)"));

/*
Take the title of the second book (books[1]) from the books array, and replace the word "Programs" with "Software". Assign the new string to the newBookTitle variable.
*/
const title2 = books[1].title.replace("Programs", "Software");
// console.log(title2);

/*
Write a function called logBookTheme that takes book's title (string), and logs to the console:

"This book is about computers" if the title starts with the word "computer",

"This book is about algorithms and data structures" if the title includes both the "algorithms" and "structures" words,

and, "This book is about some systems, but definitely not about operating systems" if the title ends with the word "system" or "systems", but doesn't include the word "operating".
*/

const logBookTheme = (title) => {
  const bookTitle = title.toLowerCase();
  if (bookTitle.startsWith("computer")) {
    console.log("This book is about computers");
  } else if (
    bookTitle.includes("algorithms") &&
    bookTitle.includes("structures")
  ) {
    console.log("This book is about algorithms and data structures");
  } else if (
    bookTitle.endsWith("system") ||
    (bookTitle.endsWith("systems") && !bookTitle.includes("operating"))
  ) {
    console.log(
      "This book is about some systems, but definitely not about operating systems"
    );
  }
};

// logBookTheme(books[0].title);
// logBookTheme(books[1].title);
// logBookTheme(books[2].title);
// logBookTheme(books[3].title);
// logBookTheme(books[4].title);
// logBookTheme(books[5].title);
// logBookTheme(books[6].title);
// logBookTheme(books[7].title);

/////////////////////////////////////////////////
// Working with Strings - Part 3

/*
Below is the bookCategories variable that stores a string of categories. Each category is separated with a semicolon, for example, in a string "science;computing", 'science' and 'computing' are separate categories.

Write a function called logBookCategories that takes a string of categories separated with semicolons, and logs each category to the console (as separate strings).
*/

const logBookCategories = (categories) => {
  const str = String(categories); // convert categories to string
  const splitBookCategories = str.split(";"); // remove semicolons from the string then separate it
  for (const eachCategory of splitBookCategories) {
    console.log(eachCategory); //log each category
  }
};

const bookCategories =
  "science;computing;computer science;algorithms;business;operating systems;networking;electronics";
// logBookCategories(bookCategories); // call the function

/*
Now, the opposite. Each book from the books array has the keywords property.

Write a function called getKeywordsAsString that takes the books array as an argument, collects keywords from each book, removes duplicates, and then joins them to create a single string where keywords are separated by a semicolon.
*/

const getKeywordsAsString = (books) => {
  const bookKeywords = []; // empty array to hold all books keywords
  for (const book of books) {
    // loop through each book
    if (book.keywords) {
      // check if the book has keywords
      bookKeywords.push(...book.keywords); // spread the keyword and add it to the bookKeywords array
    }
  }
  const removeDuplicate = [...new Set(bookKeywords)]; // remove duplicates from the bookKeywords array using set
  const finalResult = removeDuplicate.join(";"); // join removeDuplicate array with semicolon
  return finalResult; // return final result
};
// console.log(getKeywordsAsString(books)); // Call the function

/*
Below is the bookChapters array that contains inner arrays. Each inner array consists of a chapter's title, and the number of a page, for example, in ['The Basics', 14], 'The Basics' is the chapter's title, and 14 is the number of a page.

Write a function called logBookChapters that takes an array of arrays (like bookChapters) as an argument, and logs each chapter's name to the console together with the page number. The page number should be separated from the chapter's name with underscores (take a look at the example below).

Use the padEnd method.
*/

const bookChapters = [
  ["The Basics", 14],
  ["Sorting", 254],
  ["Searching", 372],
  ["Graphs", 526],
  ["Strings", 706],
];

const logBookChapters = (bookChapters) => {
  for (const [chapterTitle, pages] of bookChapters) {
    // loop over the bookChapters array then bring out the chapterTitle and pages from each inner array
    console.log(chapterTitle.padEnd(20, "_") + " " + pages); // add underscore(_) to the end of the chapterTitle element till it length is 20 then concatenate it with the pages
  }
};

// logBookChapters(bookChapters); // call the function with the bookChapters array as it argument
