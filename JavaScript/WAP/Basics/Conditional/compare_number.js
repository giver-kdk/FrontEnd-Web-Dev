// Write a JavaScript program to check two given numbers.
// Return true if one of the number is 50 or if their sum is 50
let read = require("prompt-sync") ({sigint: true});
let first = Number(read("Enter first number: "));
let second = Number(read("Enter second number: "));

if((first + second == 50) || first == 50 || second == 50) console.log(true);
else console.log(false);
