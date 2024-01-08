// Write a JavaScript program to compute the sum of all digits that occur in a given string
let array = [1, 2, 3, 4, 5, 6];

function swap(array)
{
	if(array.length % 2 == 0)
	{
		let first = array.slice(0, (array.length / 2));
		let second = array.slice((array.length / 2), array.length);
		return [...second, ...first];
	}
	else
	{
		return "Araay length must be even";
	}
}

console.log(swap(array)); 

array = [2, 3, 5, 6];
console.log(swap(array)); 