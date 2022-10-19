// Write a JavaScript program to compute the sum of absolute differences of consecutive numbers of a given array of integers.
let array = [1, 5, 2, 8, 10];

function sum(array)
{
	let result = 0;
	for(let i = 0; i < array.length - 1; i++)
	{
		let diff = Math.abs(array[i] - array[i + 1]);
		result = result + diff;
	}
	return result;
}

console.log(sum(array));