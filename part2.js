"use strict";

/*
///////////////////////////
// Coding Challenge 1


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3; // Average for team Dolphins

let avgDolphins = calcAverage(44, 23, 71);
let avgKaolas = calcAverage(65, 54, 49);
console.log(avgDolphins, avgKaolas);

function checkWinner(avgDolphins, avgKaolas) {
  let result;
  if (avgKaolas >= avgDolphins * 2) {
    result = `Kaolas wins (${avgKaolas} vs. ${avgDolphins})`;
  } else if (avgDolphins >= avgKaolas * 2) {
    result = `Dolphins wins (${avgDolphins} vs. ${avgKaolas})`;
  } else {
    result = "No team wins!";
  }
  return result;
}

console.log(checkWinner(avgDolphins, avgKaolas));

// Test 2
avgDolphins = calcAverage(85, 54, 41);
avgKaolas = calcAverage(23, 34, 27);

console.log(avgDolphins, avgKaolas);
console.log(checkWinner(avgDolphins, avgKaolas));



/////////////////////
// Coding Challenge 2
function calcTip(bill) {
  const tip =
    bill <= 300 && bill >= 50 // for any food between 50 and 300 bill
      ? (15 / 100) * bill // formula for getting 15% bill of any food between 50 and 300 bill
      : (20 / 100) * bill; // formula for getting 20% bill of any food bill lower than 50 or greater than 300

  return tip;
}

const bills = [125, 555, 44, 100];
const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[2]),
  calcTip(bills[3]),
];

const totals = [
  // total is bills + tips
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[2] + tips[2],
  bills[3] + tips[3],
];
console.log(bills, tips, totals);
console.log(totals);


//////////////////////////////////
// Coding Challenge 3
const markInformation = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.new = this.mass / this.height ** 2;
    return this.new;
  },
};

const johnInformation = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.new = this.mass / this.height ** 2;
    return this.new;
  },
};

const markBMI = markInformation["calcBMI"]();
const johnBMI = johnInformation.calcBMI();

console.log(markBMI, johnBMI);

if (markBMI > johnBMI) {
  console.log(
    `${markInformation.fullName}'s BMI (${markBMI}kg/mm) is higher than ${johnInformation.fullName}'s BMI (${johnBMI}kg/mm).`
  );
} else {
  console.log(
    `${johnInformation.fullName}'s BMI (${johnBMI}kg/mm) is higher than ${markInformation.fullName}'s BMI (${markBMI}kg/mm).`
  );
}


////////////////////////////
// Coding Challenge 4
const calcTip = function (bill) {
  const tip =
    bill <= 300 && bill >= 50 // for any food between 50 and 300 bill
      ? (15 / 100) * bill // formula for getting 15% bill of any food between 50 and 300 bill
      : (20 / 100) * bill; // formula for getting 20% bill of any food bill lower than 50 or greater than 300

  return tip;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

console.log(bills, tips, totals);

/////////////////////////
// Bonus
const calcAverage = function (arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  console.log(sum);
  return sum / arr.length;
};

console.log(`Average Totals: ${calcAverage(totals)}`);
console.log(`Average bills: ${calcAverage(bills)}`);
console.log(`Average tips: ${calcAverage(tips)}`);

*/
