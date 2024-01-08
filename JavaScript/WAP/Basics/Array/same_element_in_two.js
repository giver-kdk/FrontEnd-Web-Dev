// Write a JavaScript program to find the number of elements which presents in both of the given arrays
let array1 = [1, 2, 3, 4, 5];
let array2 = [1, 3, 5, 7, 9];

function same(arr1, arr2)
{
	let count = 0;
	if(arr1.length != arr2.length)
	{
		console.log("Array lenght should be equal");
		return;
	}
	
	for(let i = 0; i < arr1.length; i++)
	{
		if(arr2.includes(arr1[i]))
		{
			count++;
			arr2.splice(arr2.indexOf(arr1[i]), 1);
		}
	}
	return count;
}
console.log(same(array1, array2));

array1 = [1, 2, 3, 4, 5];
array2 = [2, 7, 8, 9, 4];
console.log(same(array1, array2));