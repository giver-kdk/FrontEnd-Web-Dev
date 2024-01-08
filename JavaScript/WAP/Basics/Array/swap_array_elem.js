// Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1/

let array = [1, 2, 3];

function swap(array)
{
	let first = array[0];
	let last = array[array.length - 1];
	let middle = array.slice(1, array.length - 1);
	return [last, ...middle, first];
}

console.log(array);
console.log(swap(array));