// Write a JavaScript program to check whether two arrays of integers of same length are similar or not. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5];

function similar(arr1, arr2)
{
	for(let i = 0; i < arr1.length; i++)
	{
		if(arr1[i] != arr2[i])
		{
			return false;
		}
	}
	return true;
}

console.log(similar(arr1, arr2));

arr2 = [2, 3, 4, 5, 6];
console.log(similar(arr1, arr2));

arr1 = [2, 3, 4, 5, 6];
console.log(similar(arr1, arr2));