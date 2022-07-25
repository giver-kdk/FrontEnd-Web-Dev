// map() method is similar to forEach() method. 
// Difference is that map() return new array after functional modification
// But, forEach() always returns 'undefined'
// The original array is not modified by map()
// The newly created array has same size as original array
// The new array elements can be different from original array
// NOTE: The loop runs for all elements simlutaneouly

let numbers = [2, 3, 4, 5, 6];
function twice(element, index, array)
{
	element = 2 * element;
	// Neccessary to return array elements, else new array element will be undefined
	return element;						// This doesn't work in case of forEach()
}

// Since, map() returns new array. So, it can be stored in a variable(New Array Variable)
let newNumbers = numbers.map(twice);				

console.log("Original Array is: ");
console.log(numbers);
console.log("New Returned Array is: ");
console.log(newNumbers);

