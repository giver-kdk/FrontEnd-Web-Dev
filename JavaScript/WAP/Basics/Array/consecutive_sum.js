// Write a JavaScript program to find the maximum possible sum of 
// some of its k consecutive numbers (numbers that follow each other in order.) of a given array of positive integers
// Means, add "k" number of elements each time and see the max sum
let array = [1, 2, 3, 4, 5];

function maximum(arr, k)
{
	let max = 0;
	for(let i = 0; i <= arr.length - k; i++)
	{
		let sum = 0;
		for(let j = i; j < i + k; j++)
		{
			sum = sum + arr[j];
		}
		if(max < sum)
		{
			max = sum;
		}
	}
	return max;
}

console.log(maximum(array, 3));
console.log(maximum(array, 2));
console.log(maximum(array, 4));
