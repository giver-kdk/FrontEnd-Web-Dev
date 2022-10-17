// Write a JavaScript program to rotate the elements left of a given array of integers of length 3
let array = [2, 4, 3];
let first = array[0];
let i;

console.log(array);
for(i = 0; i < array.length - 1; i++)
{
	array[i] = array[i + 1];
}
array[i] = first;

console.log(array);