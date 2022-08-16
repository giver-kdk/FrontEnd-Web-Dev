// join() gathers array elements into a string
// It returns new string and doesn't modify original array
/*
Syntax:
	newString = arrayName.join(separator);

	Here, 'separator' is the string that separates the array elements
	It is optional. So, in its absence, array elements are separated by comma in the final string 

*/
let group = ["Ram", "Shyam", "Hari"];
let collection = group.join(" and  ");

let numbers = [5, 6, 7, 8, 9];
let numCollection = numbers.join();			// Separated by comma by default
// Display final strings
console.log(collection);
console.log(numCollection);