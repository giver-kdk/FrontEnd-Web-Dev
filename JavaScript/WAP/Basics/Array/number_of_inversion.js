// Write a JavaScript program to find the number of inversions of a given array of integers
// Basically, count the pair which is in descending order
let array = [5, 3, 1, 7, 8, 2, 3];

function inversion(arr)
{
	let count = 0;
	for(let i = 0; i < arr.length; i++)
	{
		for(let j = i + 1; j < arr.length; j++)
		{
			if(arr[i] > arr[j])
			{
				count++;
			}
		}
	}
	return count;
}
console.log(inversion(array));