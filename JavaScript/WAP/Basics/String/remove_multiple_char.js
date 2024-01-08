// Write a JavaScript program to remove all characters from a given string that appear more than once
function no_repeat(string)
{
	let result = [];
	for(let i = 0; i < string.length; i++)
	{
		if(!result.includes(string[i]))
		{
			result.push(string[i]);
		}
	}
	return result.join("");
}
console.log(no_repeat("Hello World"));
console.log(no_repeat("Banana"));
console.log(no_repeat("Apple"));