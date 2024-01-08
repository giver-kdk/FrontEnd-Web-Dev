// Write a JavaScript program to find the shortest possible string which can create a string to make it a palindrome by adding characters to the end of it
function generate(string)
{
	for(let i = 0; i < string.length; i++)
	{
		let first = string.slice(0, i + 1).split("").reverse().join("");
		let palindrome = string + first;
		if(is_palindrome(palindrome)) return palindrome;
	}
}

function is_palindrome(string)
{
	let reverse = string.split("").reverse().join("");
	if(string == reverse) return true;
	else return false;
}

console.log(generate("ppa"));
console.log(generate("give"));
console.log(generate("han"));