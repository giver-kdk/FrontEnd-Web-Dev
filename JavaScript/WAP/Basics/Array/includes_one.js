// Write a JavaScript program to check whether 1 appears in first or last position of a given array of integers. The array length must be greater or equal to 1.
function check(array)
{
	if(array.length >= 1)
	{
		let hasOne = array[0] == 1 || array[array.length - 1] == 1;
		if(hasOne) return true;
		else return false;
	}
	else return "Array length must be greater than one";
}
let array = [1, 2, 3, 1];
console.log(check(array));

array = [1, 2, 3, 4]
console.log(check(array));

array = [5, 2, 3, 4]
console.log(check(array));

array = []
console.log(check(array));