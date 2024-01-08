// Write a JavaScript program to divide two positive numbers and return a string with properly formatted commas
function divide(a, b)
{
	let result = String(Math.floor(a / b));
	return result.split("");
}

console.log(divide(8, 2));
console.log(divide(200, 2));
console.log(divide(512, 3));