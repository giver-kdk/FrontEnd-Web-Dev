// filter() return an array of those elements that pass a certain test(condition) of user-derfined function
// The parameters of user-derfined functions are element, index and array itself
// Original array is not modified by filter()
// The newly created array have have different size than original array
// But, the new array elements can't be different from original array(Since, new array is just selected from original one)

let numbers = [5, 6, 7, 8, 9];
function test(element, index, array)
{
	// Only return element that satisfy the condition
	if(element > 6)
	{
		element = element * 2;			// Here, original element is returned even after the modification
		return (element * 2);
	}
}
let newNumbers = numbers.filter(test);
console.log(newNumbers);



