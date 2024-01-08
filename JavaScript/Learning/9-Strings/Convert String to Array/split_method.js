// split() retuns an array of strings by splitting the original string into parts
// It splits the string on the basis of provided parameter
/*
Syntax:
	arrayName = stringName.split(divider);

	Here, 'divider' is the string which divided the original string into sub-string array
	'divider' string is not included in the new returned array 

*/

let myText = "Giver is a boy";
let newArray1 = myText.split(" ");		// Sub-string separated by " " becomes array elements
let newArray2 = myText.split("");		// Here, every characters of string becomes array elements
let newArray3 = myText.split();			// Here, the entire string becomes a single array element


console.log(newArray1);
console.log(newArray2);
console.log(newArray3);

