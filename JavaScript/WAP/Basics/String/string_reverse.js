// Write a JavaScript program to reverse a given string.
function revert(string)
{
	string = string.split("");
	string = string.reverse().join("");
	return string;
	
}
console.log(revert("Giver"));
console.log(revert("Khadka"));
console.log(revert("Hello World"));