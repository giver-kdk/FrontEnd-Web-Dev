// Write a JavaScript program to test whether a string end with "Script". 
// The string length must be greater or equal to 6

function check(string)
{
	if(string.length >= 6)
	{
		let end = string.slice(string.length - 6, string.length);
		if(end == "Script")
		{
			console.log("The string ends with Script");
		}
		else
		{
			console.log("The string doesn't end with Script");
		}
	}
	else
	{
		console.log("String length must be greater or equal to 6");
	}
}

check("JavaScript");
check("TypeScript");
check("I like to write Script for automation");
check("JavaScript is a popular language");
check("Hi")