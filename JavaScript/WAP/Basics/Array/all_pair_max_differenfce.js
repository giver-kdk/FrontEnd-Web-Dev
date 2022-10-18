// Write a JavaScript program to find the maximal difference among all possible pairs of a given array of integers
let array = [1, 2, 5, 8, 19];

function maximum(array)
{
	let max = 0;
	for(let i = 0; i < array.length - 1; i++)
	{
		for(let j = i + 1; j < array.length; j++)
		{
			let diff = Math.abs(array[i] -array[j]);
			if(max < diff)
			{
				max = diff;
			}
		}
	}
	return max;
}

console.log(maximum(array));