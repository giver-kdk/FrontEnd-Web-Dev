// Write a JavaScript program to create an array of prefix sums of the given array.
/*
	In computer science, the prefix sum, cumulative sum, inclusive scan, or simply scan of a sequence of numbers x0, x1, x2, ... is a second sequence of numbers y0, y1, y2, ..., the sums of prefixes of the input sequence:
	y0 = x0
	y1 = x0 + x1
	y2 = x0 + x1+ x2
*/
function prefix_sum(array)
{
	let result = [];
	for(let i = 0; i < array.length; i++)
	{
		sum = 0;
		for(let j = 0; j <= i; j++)
		{
			sum = sum + array[j];
		}
		result[i] = sum;
	}
	return result;
}
let array = [1, 2, 3, 4, 5];
console.log(prefix_sum(array));

array = [3, 4, 5, 6, 7];
console.log(prefix_sum(array));