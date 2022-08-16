/*
There are following data types:
- Undefined
- String
- Number
- Boolean
- Bigint
- Symbol
*/

let myName = "Giver";				// String
let age = 19;					// Number (It can be integer and float)
let alive = true;				// Boolean
let useless = null;

// 'typeof' operator shows data type of variable
console.log(typeof(myName));
console.log(typeof(age));
console.log(typeof(alive));
// This is a 'Bug' which shows 'null' variable as 'object' data type which is false
console.log(typeof(useless));

// Different data type operations
console.log("Different Operation: \n");
// 19 and 10 is concatinated
console.log(19 + "10");
// This is a 'Bug' because it actually subtracts 10 and 5
console.log(10 - "5");
// String Concatination
console.log("Giver" + "Khadka");
// Concatinates whitespace and 5
console.log(" " + 5);
// Generates NaN(Not a Number) error
console.log("Hello" - "World");
// Here, true = 1 and false = 0. So, arithmatic operation is similar to numbers
console.log(true + true);
console.log(true + false);
console.log(false + true);
console.log(false - true);



