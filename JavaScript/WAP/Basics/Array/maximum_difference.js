// Write a JavaScript program to find the maximal difference between any two adjacent elements of a given array of integers
let array = [1, 5, 3, 14, 25];

function maximum(array)
{
	let max = 0;
	for(let i = 0; i < array.length - 1; i++)
	{
		let diff = Math.abs(array[i] - array[i + 1]);
		if(max < diff)
		{
			max = diff;
		}
	}
	return max;
}

console.log(maximum(array));
