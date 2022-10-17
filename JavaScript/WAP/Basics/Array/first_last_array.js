// Write a JavaScript program to create a new array taking the first and last elements from a given array of integers and length must be greater or equal to 1
let array = [1, 2,3, 4, 5];

function create(array)
{
	// Returning array
	return ([array[0], array[array.length - 1]]);
}

console.log(create(array));

array = [5, 6, 7, 8, 9];
console.log(create(array));
