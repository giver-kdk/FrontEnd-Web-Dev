// Write a JavaScript program to find whether the members of a given array of integers is a permutation of numbers from 1 to a given intege
let array = [1, 2, 3, 4, 5];

function permutation(arr, n)
{
	for(let i = 0; i < arr.length; i++)
	{
		if(arr[i] <= 0 && arr[i] > n) return false;
	}
	return true;
}
console.log(permutation(array, 5));

array = [1, 2, 5];
console.log(permutation(array, 5));