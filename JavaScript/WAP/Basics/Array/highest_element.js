// Write a JavaScript program to find the kth greatest element of a given array of integers
let arr = [1, 2, 3, 4, 5];

function find(arr, n)
{
	arr.sort((a, b) =>
	{
		return b - a;
	});
	return `The nth highest element is ${arr[n - 1]}`;
}

console.log(find(arr, 4));
console.log(find(arr, 2));
console.log(find(arr, 1));