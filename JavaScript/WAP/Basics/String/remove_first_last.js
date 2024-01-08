// Write a JavaScript program to create a new string without the first and last character of a given string
function modify(string)
{
	if(string.length >= 3)
	{
		console.log(string.slice(1, string.length - 1));
	}
	else
	{
		console.log("Small String Length Detected!");
	}
}
modify("Giver");
modify("JavaScript");
modify("Hi");