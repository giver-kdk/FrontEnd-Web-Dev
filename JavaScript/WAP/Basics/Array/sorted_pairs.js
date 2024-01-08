// Write a JavaScript program to find the number of sorted pairs formed by its elements of a given array of integers such that one element in the pair is divisible by the other one
// For example - The output of [1, 3, 2] ->2 - (1,3), (1,2).
// The output of [2, 4, 6] -> 2 - (2,4), (2,6)
// The output of [2, 4, 16] -> 3 - (2,4), (2,16), (4,16)

let array = [4, 1, 2, 3];

function count_pairs(array)
{
	let pairs = [];
	array.sort((a, b) => (a - b));
	for(let i = 0; i < array.length - 1; i++)
	{
		for(let j = i + 1; j < array.length; j++)
		{
			if((array[i] % array[j] == 0) || (array[j] % array[i] == 0))
			{
				// Push array into an array. So, we get an 2D array
				pairs.push([array[i], array[j]]);
			}
		}
	}
	console.log(pairs);
	console.log(pairs.length);
}

count_pairs(array);