// Write a JavaScript to replace each character of a given string by the next one in the English alphabet
let a = "Giver";

function increment(string)
{
	string = string.split("");
	let inc = string.map(char =>
		{
			return String.fromCharCode((char.charCodeAt(0) + 1));
		})
	return inc.join("");
}

console.log(increment("Giver"));
console.log(increment("Khadka"));