// Import the prompt-sync dependency

const prompt = require('prompt-sync')();

// Get input from the user

const fizz = prompt("Input your number");

// Convert string to a number.

const numFizz = Number(fizz);

// if statements

if (numFizz % 3 === 0 && numFizz % 5 === 0) {
    console.log("FIZZBUZZ");
} else if (numFizz % 5 === 0) {
    console.log("Buzz");
} else if (numFizz % 3 === 0) {
    console.log("Fizz");
}