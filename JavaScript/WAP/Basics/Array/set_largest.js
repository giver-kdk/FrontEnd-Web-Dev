// Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value.
//  Display the new array.
let array = [1, 2, 3];
function set(array)
{
	let largest = array[0] > array[array.length - 1] ? array[0] : array[array.length - 1];
	let result = array.map(() =>
	{
		return largest;
	});
	return result;
}

console.log(set(array));

array = [5, 3, 7];
console.log(set(array));
