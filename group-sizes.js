// Import the prompt-sync dependency

const prompt = require('prompt-sync')();

// Get input from the user

const group = prompt(
    "Input the total number of students in your class to find the number of groups of three and groups of two");

// Convert to number.

const numbGroup = Number(group);



