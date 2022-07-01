// JS has a predefined class called 'Array' 
// Array in JS can store mutliple data type elements

// We can create objects from 'Array' class by:
let group = new Array;					// This is optional
group = ["First", "Second", "Third", "Forth", "Fifth"];

let people = ["Ram", "Shyam", "Hari", "Sita", "Gita"];
let marks= [98, 70, 80, 76, 45];
// Storing multiple data types
let random = ["Giver", 19, true, "Khadka"];

// Accessing array elements
// Here,'length' is the property of array, not method. So, we dont do length()
for(let i = 0; i < people.length; i++)
{
	console.log(people[i]);
}
console.log();						// Prints 'new line' by default
for(let i = 0; i < random.length; i++)
{
	console.log(random[i]);
}