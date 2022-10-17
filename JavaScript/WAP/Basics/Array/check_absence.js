// . Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or a 3
let array = [1, 2];

function check(array)
{
	if(!(array.includes(1)))
	{
		return "Doesn't Contain 1";
	}
	else if(!(array.includes(3)))
	{
		return "Doesn't Contain 3";
	}
	else return "Contains 1 or 3";
}

console.log(check(array));

array = [3, 4];
console.log(check(array));

array = [5, 6];
console.log(check(array));