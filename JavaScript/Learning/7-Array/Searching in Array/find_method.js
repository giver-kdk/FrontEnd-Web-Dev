// find() runs user-derfined function on each element of array
// And return the 1st element that passes a test(condition)
// If none of the elements pass the test, then it returns 'undefined'
// Parameters of user-defined function: element, index and array itself
let numbers = [5, 6, 7, 8, 9];
function test(element, index, array)
{
	if(element > 6)
	{
		// return index;		// Anyhow 'element' is returned
		element = element + 5	// Anyhow original 'element' is returned
		return (element);
	}
}
let requiredItem = numbers.find(test);
console.log(requiredItem);
if(requiredItem)			// Since, value except 'undefined' is truthy
{
	console.log("Item Found");
}
else
{
	console.log("Item Not Found");
}