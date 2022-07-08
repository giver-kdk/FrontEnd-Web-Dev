// slice() method cuts the string from given start-index to end-index
// It returns the extracted string as a new string
// It doesn't modify the origial string
/* Syntax:
		stringName.slice(start, end);

		Here, 'start' is the index from where to cut the string
		'end' is upto where to cut the string. But not including 'end'
*/
let myName = "Giver Khadka";
let firstName = myName.slice(0, 5);
let wierdName = myName.slice(0, -2);			// Negative index means index from end toward start
console.log(myName);
console.log(firstName);
console.log(wierdName);