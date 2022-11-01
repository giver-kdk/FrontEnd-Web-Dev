// Write a JavaScript program to compute the sum of all digits that occur in a given string
let string = "Hello123 World456";

function sum(string)
{
	let sum = 0;
	for(let i = 0; i < string.length; i++)
	{
		if(Number(string[i]))
		{
			sum = sum + Number(string[i]);
		}
	}
	return sum;
}
console.log(sum(string));