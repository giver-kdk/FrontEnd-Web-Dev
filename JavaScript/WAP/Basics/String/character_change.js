//  Write a JavaScript program to create a new string from a given string 
// With the first character of the given string added at the front and back
 function change(string)
 {
	let first = string[0];
	let part = string.slice(0, string.length - 1);
	return part + first;
 }

console.log(change("Giver"));
console.log(change("Khadka"));
console.log(change("Computer"));
