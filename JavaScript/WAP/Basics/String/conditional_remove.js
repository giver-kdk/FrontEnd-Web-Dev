// Write a JavaScript program to create a new string from a given string, 
// removing the first and last characters of the string if the first or last character are 'P'.
// Return the original string if the condition is not satisfied.
function show(string)
{
	if(string[0] == "P" && string[string.length - 1] == "P")
	{
		return string.slice(1, string.length - 1);
	}
	else
	{
		return string;
	}
}
console.log(show("PythonP"));
console.log(show("Prop"));
console.log(show("People"));
