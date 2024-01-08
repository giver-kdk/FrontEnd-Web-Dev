// Write a JavaScript program to check whether the first and last elements are equal of a given array of integers length 3
let array = [12, 10, 12];

function check(array)
{
	if(array[0] == array[array.length - 1])
	{
		return true;
	}
	else return false;
}

console.log(check(array));

array = [1, 2, 3]
console.log(check(array));

array = [3, 2, 3]
console.log(check(array));