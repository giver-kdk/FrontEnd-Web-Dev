// Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3.
let array = [1, 2];

function check(array)
{
	if(array.includes(1) || array.includes(3))
	{
		return true;
	}
	else return false;
}

console.log(check(array));

array = [3, 4];
console.log(check(array));

array = [5, 6];
console.log(check(array));