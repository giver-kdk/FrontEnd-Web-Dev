// Template Literal or Template String is a preferred method of writing combinations of strings and variables
// Variable/Functions/Non-Strings are written inside ${}
// String are written freely inside backtick(``)
// Backtick(``) is generally located above 'Tab' button 
let myName = "Giver";
let age = 19;
let passion = "being Super Lazy";

// Traditional method
console.log("My name is " + myName + ". I am " + age + " years old. My passion is " + passion);

// Template Literal method
// Here, removal of '+' operator improves readabiity
console.log(`My name is ${myName}. I am ${age} years old. My passion is ${passion}`);