// forEach() method is defined inside 'Array' class
// This method runs a userdefined function for each of all the elements
// The loop from this method is unstoppable. So, using 'break' is not valid
// The function to be executed have element, index and array itself as parameters
let numbers = [5, 6, 7, 8, 9];
let people = ["Ram", "Shyam", "Hari", "Sita","Gita"];
function display(element, index, array)
{
	console.log(`${index}: ${element} is from array ${array}`);
}
// The function parameters are optional. 
// But, including parameter happens in ordered sequence: (element, index, array)
function increment(element)
{
	element++;
	console.log(`${element}`);
}

console.log(`INDEX: ELEMENT`);
// Passing function name as argument
people.forEach(display);
numbers.forEach(increment);
numbers.forEach(display)