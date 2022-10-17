// Write a JavaScript program to create a new string using the first and last n characters from a given sting. 
// The string length must be greater or equal to n.
function combine(string, n)
{
	if(n <= string.length)
	{
		let first = string.slice(0, n);
		let last = string.slice(string.length - n, string.length);
		return first + last;
	}
	else
	{
		return string;
	}
}
console.log(combine("JavaScript", 2));
console.log(combine("Python", 4));
console.log(combine("Hello World", 2));