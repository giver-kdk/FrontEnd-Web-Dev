// Math.round() rounds up the decimal into closest integer number
let a = 4.15;
console.log("Rounded Number");
console.log(Math.round(a));
// Math.ceil() rounds up the decimal into smallest integer just greater or equal to decimal number
let b = 4.15;
console.log("Ceiled Number");
console.log(Math.ceil(b));
// Math.floor() rounds up the decimal into largest integer just smaller or equal to decimal number
let c = 4.15;
console.log("Floored Number");
console.log(Math.floor(c));
// Math.trunc() just detaches the integer part from fraction part in decimal number
// It doesn't use any logic like closest integer, minimum integer or maximum integer
let d = 4.75;
console.log("Truncated Number");
console.log(Math.floor(d));
/*
NOTE: If argument is positive then, Math.trunc() acts as Math.floor() else acts as Math.ceil()
*/