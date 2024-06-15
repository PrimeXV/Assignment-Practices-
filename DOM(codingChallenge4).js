"use strict";
//////////////////////////////////
// DOM Coding Challenge #4

/*
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.

Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
 calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅

Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😄
 document.bod
 */

// DOM and creation of elements also adding text content to it
const container = document.createElement("div");
const textarea = document.createElement("textarea");
const button = document.createElement("button");
button.textContent = "Enter";

// Append the container to the document body and the new elements to the container
document.body.append(container);
container.append(textarea);
container.append(button);

// Styling the container
container.style.display = "grid";
container.style.gridTemplateColumns = "1fr";
container.style.gap = "10px";
container.style.margin = "0 0 45px 45px";
container.style.padding = "20px";
container.style.width = "fit-content";
container.style.justifyItems = "center";

// Style the textarea and button
textarea.style.width = "300px";
textarea.style.height = "150px";
textarea.style.margin = "10px";
textarea.style.padding = "10px";
textarea.style.fontSize = "16px";
textarea.style.border = "6px solid #ccc";
textarea.style.borderRadius = "5px";
textarea.style.backgroundColor = "gray";

button.style.margin = "10px";
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.backgroundColor = "#007BFF";
button.style.color = "white";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";

// Add hover effect to the button
button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "#0056b3";
});
button.addEventListener("mouseout", () => {
  button.style.backgroundColor = "#007BFF";
});

// convertToCamelCase function
const convertToCamelCase = () => {
  const messages = textarea.value.split("\n"); // Get the value from the textarea in each line
  let count = 0; // assign 0 to new count variable
  for (const message of messages) {
    count++; // increase count by 1 per loop
    const check = /^[^_]+_[^_]+$/; // check if input in variable is in a_b format
    if (check.test(message)) {
      // if true continue code
      const [first, second] = message.toLowerCase().trim().split("_"); // convert message to lower case, remove all white space then split it to first and second new variables by removing the underscore in it.
      const add = first + second.replace(second[0], second[0].toUpperCase()); // concatenate first variable to the second variable after replacing the first letter of the second variable to upper case
      const final = add.padEnd(23) + "✅".repeat(count); // add white space to the end of add variable until length is 23 then concatenate it with repeating emoji based on number of count
      console.log(final); // log final variable
    } else {
      // if false return this to the console
      console.log("Incorrect format, Try again!");
    }
  }
};

// call the convertToCamelCase function when the button is clicked
button.addEventListener("click", convertToCamelCase);
