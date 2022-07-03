// reduce() runs a user-defined function through each of the elements and return a single data
// The original array is not modified by reduce()
// It is different than other methods because it can perform operation between different elements
// reduce() method have 2 parameters: Function and Initial Value
// The user-defined function has 4 parameters: Accumulator, Element, Value and Array itself
// Accumulator can store initial value as well as final result like in a Microprocessor
// NOTE: reduce() can also be used to reduce(convert) 2D or 3D Array into 1D Array. But it's not recommended


// Using reduce() method with default initial value in Accumulator
let numbers = [5, 6, 7, 8, 9];
function sum(accumulator, element, index, array)
{
	debugger;
	// Equivalent to: return (accumulator = accumulator + element);			
	return (accumulator + element);
}
// Only the final single sum data of array elements is returned by 'reduce()'
let result =  numbers.reduce(sum);			// At start, accumulator  = 5
console.log(result);



// Using reduce() method with custom initial value in Accumulator
// Here, 7 is also added with remaining array elements
result =  numbers.reduce(sum, 7);		// At start, accumulator  = 7		
console.log(result);



// Using reduce() to reduce 2D Array into 1D(NOT RECOMMENDED)
let group = 
[
	["Ram", "Shyam"],
	["Hari", "Sita"],
	["Gita", "Rita"],
	["Gopal", "Krishna"]
];
function one_dimension(accumulator, element)
{	// Simply combine accumulator and element
	accumulator = accumulator.concat(element);			// 'concat' is a method of 'accumulator' here		
	return accumulator;
}
// This time a 1D Array is returned by reduce()
let newGroup = group.reduce(one_dimension);
console.log(group);
console.log(newGroup);


