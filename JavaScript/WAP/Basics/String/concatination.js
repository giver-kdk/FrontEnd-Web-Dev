// Write a JavaScript program to create a new string adding "Py" in front of a given string. 
// If the given string begins with "Py" then return the original string.
function manipulate(string)
{
	let py = "Py";
	if(string.slice(0, 2) == "Py") return string;
	else return (py.concat(string));
}
console.log(manipulate("PyGiver"));