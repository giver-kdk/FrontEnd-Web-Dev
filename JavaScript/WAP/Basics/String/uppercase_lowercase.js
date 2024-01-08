// Write a JavaScript program to create new string with first 3 characters are in lower case from a given string.
// If the string length is less than 3 convert all the characters in upper case.
function modify(string)
{
	if(string.length < 3)
	{
		return string.toUpperCase();
	}
	else
	{
		let first = string.slice(0, 3);
		let second = string.slice(3, string.length);
		return first.toLowerCase() + second;
	}
}

console.log(modify("hi"));
console.log(modify("Giver"));
console.log(modify("Khadka"));
console.log(modify("HELLO"));