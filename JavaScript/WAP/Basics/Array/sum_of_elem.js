// Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.
let array = [2, 4, 3];
let result = array.reduce((accu, elem) =>
{
	return accu + elem;
});
console.log(result);