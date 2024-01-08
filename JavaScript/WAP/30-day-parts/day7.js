/*
Generate random number between specified range. "random()" method return random value from 0 to 1.
To get random values for desired range, we shift the resulting value as shown in the code. 
*/
let min = 5, max = 10;
let random = Math.random() * (max - min) + min;
random = Math.round(random);
// Output is random value between 5 and 10
console.log(Math.round(random));
