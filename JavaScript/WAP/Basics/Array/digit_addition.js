// Write a JavaScript program to add two digits of a given positive integer of length two
let number = 23;

function add(number)
{
	let first = Math.floor(number / 10);
	let last = number % 10;

	return first + last;
}

console.log(add(number));

number = 56;
console.log(add(number));

number = 26;
console.log(add(number));