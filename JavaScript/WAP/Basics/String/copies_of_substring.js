// Write a JavaScript program to create a new string of 4 copies
//  of the last 3 characters of a given original string. The length of the given string must be 3 and above.

function copy(string)
{
	if(string.length >= 3)
	{
		let subStr = string.slice(string.length - 3, string.length);
		console.log(subStr + subStr + subStr);
	}
	else
	{
		console.log("Error");
	}
}
copy("Giver");
copy("Python");
copy("JavaScript");

