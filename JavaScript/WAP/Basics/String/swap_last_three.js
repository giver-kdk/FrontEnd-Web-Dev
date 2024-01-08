// Write a JavaScript program to move last three character to the start of a given string. 
// The string length must be greater or equal to three
function swap(string)
{
	if(string.length >= 3)
	{
		let first = string.slice(0, string.length - 3);
		let last = string.slice(string.length - 3, string.length);
		console.log(last + first);
	}
	else
	{
		console.log("String length less than 3");
	}
}

swap("Python");
swap("Giver");
swap("Khadka");
swap("Hi");