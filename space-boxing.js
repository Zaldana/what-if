// Import the prompt-sync dependency

const prompt = require('prompt-sync')();

// Get input from the user

const weight = prompt("What is your Earth weight");

const planet = prompt("which planet will you be fighting on? Input 1 for Venus, 2 for Mars, 3 for Jupiter, 4 for Saturn, 5 for Uranus, and 6 for Neptune");

// Convert to number.

const numWeight = Number(weight);

const numPlanet = Number(planet);

// output log

if (numPlanet === 1) {
    console.log(.78 * numWeight);
} else if (numPlanet === 2) {
    console.log(.78 * numWeight);
} else if (numPlanet === 3) {
    console.log(.78 * numWeight);
} else if (numPlanet === 4) {
    console.log(.78 * numWeight);
} else if (numPlanet === 5) {
    console.log(.78 * numWeight);
} else if (numPlanet === 6) {
    console.log(.78 * numWeight);
}