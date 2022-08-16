// NOTE: If NodeJS is installed, simple press CTRL+ALT+N in VsCode to run code in terminal

// Display Output on console
var myVariable = 5;
console.log("Hello World");
// Show details explaination about data on browser console
console.dir(myVariable);		
// alert("This is an alert message");
// confirm("Do you agree?");

// Variables can be created using 'var', 'let' and 'const' keys
// Data type is dynamically(automatically) set while creating variable
var username = "Giver Khadka";				// Create String
var age = 19;								// Create Number
// Redeclaration of 'var' variable is allowed
var age = 20;


// Generally 'let' is preferred
let movieName = "Interstellar";
let rating = 5;
// Redeclaration of 'let' variable is not allowed
// let rating = 4;
// 'const'  is used to create constant variables
const gravity = 10;
// gravity = 20;							// Generates error since constant variable can't be modified 



function myFunction()
{
	// The varibale created without 'var', 'let' or 'const' becomes global variable
	money = 20000;
	console.log(money);
}
// console.log(money);						// This will not run cause, 'money' is not created yet
myFunction();								// 'money' is created when the function is called
console.log(money);

// Here, '+' sign concatinates tw0 strings
console.log("User Name is: " + username);
console.log("Age is: " + age);
console.log("Movie Name is: " + movieName);
console.log("Movie Rating is: " + rating);
console.log("Acceeration Due to Gravity is: " + gravity);
console.log("Age and Rating is: " + age + rating);			// Age and Rating is concatinated
console.log("Sum of Age and Rating is: " + (age + rating)); // Age and Rating is added

