// Import the prompt-sync dependency

const prompt = require('prompt-sync')();

// Get input from the user

const age = prompt("How old are you?");

// Number conversion

const numberAge = Number(age);

// if statements

if (numberAge < 16) {
    console.log("You can't drive");
} else if (numberAge === 16 || numberAge === 17) {
    console.log("You can drive but not vote");
} else if (numberAge >= 18 && numberAge <= 24) {
    console.log("You can vote but not rent a car.");
} else if (numberAge >= 25) {
    console.log("You can do pretty much anything.");
}