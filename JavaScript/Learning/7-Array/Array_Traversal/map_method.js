// map() method is similar to forEach() method. 
// Difference is that map() return new array after functional modification
// But, forEach() always returns 'undefined'
// The original array is not modified by map()
let numbers = [2, 3, 4, 5, 6];
function twice(element, index, array)
{
	element = 2 * element;
	return element;
}
function display(element, index)
{
	console.log(`${index}: ${element}`);
}
let newNumbers = numbers.map(twice);

console.log("Original Array is: ");
numbers.forEach(display);
console.log("New Returned Array is: ");
newNumbers.forEach(display);

