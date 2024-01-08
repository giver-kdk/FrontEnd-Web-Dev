// Write a JavaScript program to compute the sum of cubes of all integer from 1 to a given integer
function sum(num)
{
	let sum = 0;
	for(let i = 1; i <=num; i++)
	{
		sum = sum + (i*i*i);
	}
	return sum;
}
console.log(sum(3));
console.log(sum(5));
console.log(sum(7));