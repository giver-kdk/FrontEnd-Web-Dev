// Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3.
let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];

function middle(a1, a2)
{
	let mid1 = a1[Math.floor(a1.length / 2)];
	let mid2 = a2[Math.floor(a2.length / 2)];

	return [mid1, mid2];
}

console.log(middle(arr1, arr2));