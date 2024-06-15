"use strict";

/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall.
GOOD LUCK 
*/

/*
// Test Data1 of Mark andJohn
const massMark1 = 78;
const heightMark1 = 1.69;
const massJohn1 = 92;
const heightJohn1 = 1.95;

// BMI of Mark and John(Data 1) with formula BMI = mass / (height ** 2)
let BMIMark1 = massMark1 / heightMark1 ** 2;
BMIMark1 = Math.round(BMIMark1 * 10) / 10; // round up to 1 decimal place
let BMIJohn1 = massJohn1 / (heightJohn1 * heightJohn1);
BMIJohn1 = Math.round(BMIJohn1 * 10) / 10; // round up to 1 decimal place

// Boolean value for markHigherBMI1
let markHigherBMI1;

if (BMIMark1 > BMIJohn1) {
  markHigherBMI1 = `Data 1
  Mark's BMI ${BMIMark1 + "kg/mm"} is higher than John's ${BMIJohn1 + "kg/mm"}`;
}
// console the result
console.log(markHigherBMI1);

// Test Data2 of Mark andJohn
const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

// BMI of Mark and John(Data 2) with formula BMI = mass / (height ** 2)
let BMIMark2 = massMark2 / heightMark2 ** 2;
BMIMark2 = Math.round(BMIMark2 * 10) / 10; // round up to 1 decimal place
let BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);
BMIJohn2 = Math.round(BMIJohn2 * 10) / 10; // round up to 1 decimal place

// Boolean value for markHigherBMI2
let markHigherBMI2;

if (BMIJohn2 > BMIMark2) {
  markHigherBMI2 = `Data 2
  John's BMI ${BMIJohn2 + "kg/mm"} is higher than Mark's ${BMIMark2 + "kg/mm"}`;
}
// console the result
console.log(markHigherBMI2);



const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

// Coding Challenge 2

// if statement to give a specific result if the BMIMark is higher than BMIJohn
if (BMIMark > BMIJohn) {
  console.log(
    `Mark's BMI (${BMIMark + "kg/mm"}) is higher than John's (${
      BMIJohn + "kg/mm"
    })!`
  );
} else {
  console.log(
    `John's BMI (${BMIJohn + "kg/mm"}) is higher than Mark's (${
      BMIMark + "kg/mm"
    })!`
  );
}


// Coding Challenge 3

// Data 1
let dolphins1 = 96;
let dolphins2 = 108;
let dolphins3 = 89;
let kaolas1 = 88;
let kaolas2 = 91;
let kaolas3 = 110;

const avgDolphinsScore = (dolphins1 + dolphins2 + dolphins3) / 3; // average score of Dolphins
const avgKaolasScore = (kaolas1 + kaolas2 + kaolas3) / 3; // average score of Kaolas

console.log("Data 1   ", avgDolphinsScore, avgKaolasScore);

if (avgDolphinsScore > avgKaolasScore) {
  console.log("Dolphins are the Winner of the competition!");
} else if (avgDolphinsScore < avgKaolasScore) {
  console.log("Kaolas are the Winner of the competition!");
} else {
  console.log("DRAW! Both are Winner");
}

// Data Bonus 1
dolphins1 = 97;
dolphins2 = 112;
dolphins3 = 101;
kaolas1 = 109;
kaolas2 = 95;
kaolas3 = 123;

// average score for Data Bonus 1
const avgDolphinsBonus1 = (dolphins1 + dolphins2 + dolphins3) / 3; // average score of Dolphins
const avgKaolasBonus1 = (kaolas1 + kaolas2 + kaolas3) / 3; // average score of Kaolas

console.log(`Data Bonus 1    `, avgDolphinsBonus1, avgKaolasBonus1);

let minimumDolphins = avgDolphinsBonus1 >= 100;
let minimumKaolas = avgKaolasBonus1 >= 100;

let draw = minimumDolphins && minimumKaolas;

if (avgDolphinsBonus1 === avgKaolasBonus1 && draw) {
  console.log("DRAW! Both are Winner");
} else if (avgDolphinsBonus1 > avgKaolasBonus1 && minimumDolphins) {
  console.log("Dolphins are the Winner of the competition!");
} else if (avgDolphinsBonus1 < avgKaolasBonus1 && minimumKaolas) {
  console.log("Kaolas are the Winner of the competition!");
}

// Data Bonus 2
dolphins1 = 97;
dolphins2 = 112;
dolphins3 = 101;
kaolas1 = 109;
kaolas2 = 95;
kaolas3 = 106;

// average score for Data Bonus 1
const avgDolphinsBonus2 = (dolphins1 + dolphins2 + dolphins3) / 3; // average score of Dolphins
const avgKaolasBonus2 = (kaolas1 + kaolas2 + kaolas3) / 3; // average score of Kaolas

console.log(`Data Bonus 2    `, avgDolphinsBonus2, avgKaolasBonus2);

minimumDolphins = avgDolphinsBonus2 >= 100;
minimumKaolas = avgKaolasBonus2 >= 100;
draw = minimumDolphins && minimumKaolas;

if (avgDolphinsBonus2 > avgKaolasBonus2 && minimumDolphins) {
  console.log("Dolphins are the Winner of the competition!");
} else if (avgDolphinsBonus2 < avgKaolasBonus2 && minimumKaolas) {
  console.log("Kaolas are the Winner of the competition!");
} else if (avgDolphinsBonus2 === avgKaolasBonus2 && draw) {
  console.log("DRAW! Both are Winner");
} else {
  console.log("Both are not Winner");
}


// Code Challenge 4

const bill = 40; // variable for any bill of food

const tip =
  bill <= 300 && bill >= 50 // for any food between 50 and 300 bill
    ? (15 / 100) * bill // formula for getting 15% bill of any food between 50 and 300 bill
    : (20 / 100) * bill; // formula for getting 20% bill of any food bill lower than 50 or greater than 300

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
); // Final result
*/
