// Simple if-else condition
let a = 2;
let b = 5;

if (a < b) {
	console.log("a is smaller than b");
}
else {
	console.log("a is larger than b");
}


// Truthy and Falsy values in JavaScript 
// There are 5 falsy values in JS: 0, undefined, null, NaN and false.
// All values except these falsy values are truthy values

// Falsy Values
// Since, '0' is falsy value, so if(0) gives false. Hence, else-statement is executed.
if (0) {		
	console.log("We got positive result");
}
else {
	console.log("We got negative result");
}

let value;
// Since, value is undefined. So, its false. Hence, else-statement is executed
if (value) {
	console.log("We got positive result");
}
else {
	console.log("We got negative result");
}


if (null) {
	console.log("We got positive result");
}
else {
	console.log("We got negative result");
}


if (NaN) {
	console.log("We got positive result");
}
else {
	console.log("We got negative result");
}


if (false) {
	console.log("We got positive result");
}
else {
	console.log("We got negative result");
}


// Truthy Values
if (5) {
	console.log("We got positive result");
}
else {
	console.log("We got negative result");
}

// Since, 'true' is truthy value, so if(true) gives true. Hence, if-statement is executed.
if (true) {
	console.log("We got positive result");
}
else {
	console.log("We got negative result");
}