// Write a JavaScript program to compute the sum of the two given integers. 
// If the two values are same, then returns triple their sum.

let read = require("prompt-sync")({sigint: true});
let first = Number(read("Enter a first number: "));
let second = Number(read("Enter a second number: "));

if(first == second) console.log(2 * (first + second));
else console.log(first + second);
