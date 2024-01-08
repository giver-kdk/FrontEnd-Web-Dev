// Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integer
function sum(num, terms)
{
	let sum = 0;
	for(let i = 0; i < terms; i++)
	{
		// Here, "2 ** i" mean "2^i"
		sum = sum + (num/(2 ** i));
	}
	return sum;
}
console.log(sum(3, 4));
console.log(sum(5, 20));
