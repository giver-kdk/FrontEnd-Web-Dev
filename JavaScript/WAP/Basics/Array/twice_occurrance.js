// Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2
let array = [30, 30];

function check(array)
{
	let hasThrity = (array[0] == 30 && array[1] == 30);
	let hasForty = (array[0] == 40 && array[1] == 40);
	if(hasThrity || hasForty) return true;
	else return false;
}

console.log(check(array));

array = [40, 40];
console.log(check(array));

array = [30, 40];
console.log(check(array));