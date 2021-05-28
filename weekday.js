// Import the prompt-sync dependency

const prompt = require('prompt-sync')();

// Get input from the user

const day = prompt("Input a number (1 - 7), to receive the corresponding day of the week");

// Convert to number.

const numbDay = Number(day);

// output log

if (numbDay === 1) {
    console.log("Monday");
} else if (numbDay === 2) {
    console.log("Tuesday");
} else if (numbDay === 3) {
    console.log("Wednesday");
} else if (numbDay === 4) {
    console.log("Thursday");
} else if (numbDay === 5) {
    console.log("Friday");
} else if (numbDay === 6) {
    console.log("Saturday");
} else if (numbDay === 7) {
    console.log("Sunday");
} else if (numbDay > 7) {
    console.log("ERROR");
}