// Write a JavaScript program to check whether there is at least one element which occurs in two given sorted arrays of integers.
let array1 = [1, 2, 3, 4, 5];
let array2 = [4, 5, 6, 7, 8];

function common(arr1, arr2)
{
	let hasCommon = false;
	arr1.forEach(elem =>
		{
			if(arr2.includes(elem)) hasCommon = true;
		})
	if(hasCommon) return true;
	else return false;
}

console.log(common(array1, array2));
