"use strict";

/*
We're building a football betting app (soccer for my American friends)!
Suppose we get data from a web service about a certain game ('game' variable on 
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and 
'players2')
2. The first player in any player array is the goalkeeper and the others are field 
players. For Bayern Munich (team 1) create one variable ('gk') with the 
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
field players
3. Create an array 'allPlayers' containing all players of both teams (22 
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
new array ('players1Final') containing all the original team1 players plus 
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player 
names (not an array) and prints each of them to the console, along with the 
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which 
team is more likely to win, without using an if/else statement or the ternary 
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored

GOOD LUCK 

*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1)
const [players1, players2] = game.players;
// console.log(players1, players2);

// 2)
const [team1Gk, ...team1FieldPlayers] = players1;
const [team2Gk, ...team2FieldPlayers] = players2;
// console.log(team1Gk, team1FieldPlayers);
// console.log(team2Gk, team2FieldPlayers);

// 3)
const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// 4)
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// 5)
const {
  odds: { team1, x: draw, team2 },
} = game;
// console.log(team1, draw, team2);

// 6)
const printGoals = (goalsScored, ...playersNames) => {
  //   console.log(playersNames);
  return console.log(
    `There are ${playersNames.length} players in the match and their names are ${playersNames} and the total goals scored in the match is ${goalsScored}.`
  );
};
// printGoals(game.score, "Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals(game.score, ...players1);
// printGoals(game.score, ...game.scored);

// 7)
// if team 1 odd is lower
game.odds.team1 < game.odds.team2 &&
  // console.log(`${game.team1} is more likely to win`);

  // if team 2 odd is lower
  game.odds.team2 < game.odds.team1 &&
  console.log(`${game.team2} is more likely to win`);

////////////////////////////////////
// Coding Challenge #2

/*
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
GOOD LUCK �
*/

// 1)
let index = 1;
for (const value of Object.entries(game.scored)) {
  // console.log(`Goal ${index}: ${value}`);
  index++;
}

// 2)
const odds = Object.values(game.odds); // all odds in an array

let averageOdd = 0; // total odds variable
for (const odd of odds) averageOdd += odd;
averageOdd /= odds.length; // average odd (total odd / total length)
// console.log(averageOdd);

// 3)
let i = 0;
for (const [team, odd] of Object.entries(game.odds)) {
  // console.log(game["team1"]);  // the bracket method of accessing an object
  // console.log(`Odd of ${i === 1 ? "draw" : `victory ${game[team]}`}: ${odd}`);
  i++;
}
// 4)
const scorers = {};

for (const player of Object.values(game.scored)) {
  // console.log(player);
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
// console.log(scorers);

//////////////////////////
// Coding Challenge #3

/*
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
GOOD LUCK 
*/

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "📁 Yellow card"],
  [69, "🛑 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "📁 Yellow card"],
]);

// 1)
const events = new Set(gameEvents.values());
// console.log(events);

// 2)
const removeYellowCard = (minutes) => {
  if (gameEvents.has(minutes)) {
    gameEvents.delete(minutes);
    console.log(
      `📁 Yellow card given at ${minutes} minutes as been removed from the event.`
    );
  } else {
    console.log(`There is no 📁 Yellow card given at ${minutes} minutes.`);
  }
};
// removeYellowCard(64);

// 3)
const EventFrequency = () => {
  const fullTime = 90;
  const average = fullTime / gameEvents.size;
  console.log(`An event happened, on average, every ${average} minutes`);
};
// EventFrequency();

// 4)
const computePreciseHalf4Event = () => {
  for (const [min, event] of gameEvents) {
    const half = min <= 45 ? "FIRST" : "SECOND";
    console.log(`[${half} HALF] ${min}: ${event}`);
  }
};
// computePreciseHalf4Event();
