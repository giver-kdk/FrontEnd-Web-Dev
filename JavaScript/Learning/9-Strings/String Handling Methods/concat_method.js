// concat() simply returns a new concatinated(combined) string
// It doesn't modiy the original string
/*
Sytax:
	newString = firstString.concat(stringList);

	Here, 'firstString' is string to concatinate with
	'stringList' is the list of strings to concatinate separated by ','

*/

let firstName = "Giver";
let lastName = "Khadka";
let fullName = firstName.concat(" ", lastName);
let Name = `${firstName} ${lastName}`;		// Template Literal method which is actually simple
console.log(firstName);
console.log(lastName);
console.log(fullName);
console.log(Name);