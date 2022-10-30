// Write a JavaScript program to change the characters (lower case) in a string where a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a

function rev(string)
{
	let result =  [];
	for(let i = 0; i < string.length; i++)
	{
		result.push(String.fromCharCode(122 - string.charCodeAt(i) + 97));
	}
	return result.join("");
}
console.log(rev("abc"));
console.log(rev("xyz"));
console.log(rev("giver"));
console.log(rev("mnop"));

