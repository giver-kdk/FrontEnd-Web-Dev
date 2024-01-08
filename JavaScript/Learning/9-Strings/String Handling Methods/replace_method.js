// replace() returns a new string by replacing a sub-string with specified sub-string in a string
// It only replaces the first occurranc of the string
// It doesn't modify the original string
// It searches the string to be replaced from start-to-end
// It returns the original string on failure
/*
Syntax:
	newString = oldString.replace(item, update);


*/

let myName = "My name is Giver Khadka. Giver means the one who gives.";
let newName = myName.replace("Giver", "Rudra");

console.log(myName);
console.log(newName);
