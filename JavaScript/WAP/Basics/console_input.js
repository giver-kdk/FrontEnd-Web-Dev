// Write a JavaScript program to get the difference between a given number and 13, 
// If the number is greater than 13 return double the absolute difference. 

const read = require("prompt-sync")({ sigint: true });		// Requires Node.js with "prompt-sync" package
let number = Number(read("Enter any number: "));

if(number - 13 < 0) console.log(Math.abs(number - 13));
else console.log(Math.abs(2 * (number - 13)));