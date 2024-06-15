"use strict";

/*
//////////////////////
// Part 1 (coding challenge 1)
let marksMass = 78;
let marksHeight = 1.69;
let johnsMass = 92;
let johnsHeight = 1.95;

let marksBMI = marksMass / marksHeight ** 2;
let johnsBMI = johnsMass / (johnsHeight * johnsHeight);

// Coding challenge 2
let markHigherBMI;
if (marksBMI > johnsBMI) {
  markHigherBMI = `Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})!`;
} else {
  markHigherBMI = `John's (${johnsBMI}) is higher than Mark's BMI (${marksBMI})!`;
}
console.log(markHigherBMI);

// Data 2
marksMass = 95;
marksHeight = 1.88;
johnsMass = 85;
johnsHeight = 1.76;

marksBMI = marksMass / marksHeight ** 2;
johnsBMI = johnsMass / (johnsHeight * johnsHeight);

// Coding challenge 2
let johnHigherBMI;
if (marksBMI > johnsBMI) {
  johnHigherBMI = `Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})!`;
} else {
  johnHigherBMI = `John's (${johnsBMI}) is higher than Mark's BMI (${marksBMI})!`;
}
console.log(johnHigherBMI);



////////////////
// coding challenge 3
let dolphins1 = 96;
let dolphins2 = 108;
let dolphins3 = 89;
let kaolas1 = 88;
let kaolas2 = 91;
let kaolas3 = 110;

const avgDolphins = (dolphins1 + dolphins2 + dolphins3) / 3;
const avgKaolas = (kaolas1 + kaolas2 + kaolas3) / 3;

console.log(avgDolphins, avgKaolas);

if (avgDolphins > avgKaolas) {
  console.log("Dolphins wins the competition");
} else if (avgKaolas > avgDolphins) {
  console.log("Kaolas wins the competition");
} else {
  console.log("Draw!");
}

// Bonus 1
dolphins1 = 97;
dolphins2 = 112;
dolphins3 = 101;
kaolas1 = 109;
kaolas2 = 95;
kaolas3 = 123;

const avgDolphinsBonus1 = (dolphins1 + dolphins2 + dolphins3) / 3;
const avgKaolasBonus1 = (kaolas1 + kaolas2 + kaolas3) / 3;

console.log(avgDolphinsBonus1, avgKaolasBonus1);

let minimumDolphins = avgDolphinsBonus1 >= 100;
let minimumKaolas = avgKaolasBonus1 >= 100;

if (minimumDolphins && avgDolphinsBonus1 > avgKaolasBonus1) {
  console.log("Dolphins wins the competition with points more than 100");
} else if (minimumKaolas && avgKaolasBonus1 > avgDolphinsBonus1) {
  console.log("Kaolas wins the competition with points more than 100");
}

// Bonus 2
dolphins1 = 97;
dolphins2 = 112;
dolphins3 = 101;
kaolas1 = 109;
kaolas2 = 95;
kaolas3 = 106;

const avgDolphinsBonus2 = (dolphins1 + dolphins2 + dolphins3) / 3;
const avgKaolasBonus2 = (kaolas1 + kaolas2 + kaolas3) / 3;

console.log(avgDolphinsBonus2, avgKaolasBonus2);

minimumDolphins = avgDolphinsBonus2 >= 100;
minimumKaolas = avgKaolasBonus2 >= 100;
const draw = minimumDolphins && minimumKaolas;

if (minimumDolphins && avgDolphinsBonus2 > avgKaolasBonus2) {
  console.log("Dolphins wins the competition with points more than 100");
} else if (minimumKaolas && avgKaolasBonus2 > avgDolphinsBonus2) {
  console.log("Kaolas wins the competition with points more than 100");
} else if (draw && avgDolphinsBonus2 === avgKaolasBonus2) {
  console.log(
    "Draw! Both teams as the same score with more than 100 points each."
  );
} else {
  console.log("No team wins the trophy");
}




//////////
// Coding Challenge 4
// when bill is 275
let bill = 275;
let tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);

// when bill is 40
bill = 40;
tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);

// when bill is 430
bill = 430;
tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);



/////////////////////////////////
// Part 2 (Coding Challenge 1)
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

console.log(avgDolphins, avgKoalas);

const checkWinner = function (avgDolphins, avgKaolas) {
  if (avgDolphins >= 2 * avgKaolas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKaolas})`);
  } else if (avgKaolas >= 2 * avgDolphins) {
    console.log(`Kaolas win (${avgKaolas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins!");
  }
};

checkWinner(avgDolphins, avgKoalas); // Data 1

// Data 2
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

console.log(avgDolphins2, avgKoalas2);

checkWinner(avgDolphins2, avgKoalas2);  // Data 2



////////////////////////////
// Coding challenge 2
const bills = [125, 555, 44];
const calcTip = (bill) => {
  const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
  return tip;
};

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, total);



///////////////
// Coding Challenge 3
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

console.log(mark.calcBMI(), john["calcBMI"]());
if (mark.calcBMI() > john["calcBMI"]()) {
  console.log(
    `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
      john.fullName
    }'s (${john["calcBMI"]()})!`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john["calcBMI"]()}) is higher than ${
      mark.fullName
    }'s (${mark.calcBMI()})!`
  );
}



///////////////////////
// Coding challenge 4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) => {
  const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
  return tip;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

console.log(bills, tips, totals);

// Bonus
const arr = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let sum = 0;

const calcAverage = function () {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
};
console.log(calcAverage(arr), calcAverage(totals), calcAverage(tips));



*/
