// Write a JavaScript program to change the capitalization of all letters in a given string.
let string = "Hello World";

function change(string)
{
	let result = [];
	for(let i = 0; i < string.length; i++)
	{
		let isSmall = string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122;
		let isBig = string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90;
		if(isSmall)
		{
			result.push(string[i].toUpperCase());
		}
		else if(isBig)
		{
			result.push(string[i].toLowerCase());
		}
	}
	return result.join("");;
}

console.log(change(string));