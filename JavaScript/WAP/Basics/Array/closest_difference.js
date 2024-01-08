// Write a JavaScript program to find two elements of the array such that their absolute difference is not greater than a given integer but is as close to the said integer
function difference(array, num)
{
	let result = [array[0], array[1]];
	let diff = Math.abs(array[0] - array[1]);
	for(let i = 0; i < array.length; i++)
	{
		for(let j = i + 1; j < array.length; j++)
		{
			let currentDiff = Math.abs(array[i] - array[j]);
			if(currentDiff <= num && currentDiff >= diff)
			{
				diff = currentDiff;
				result = [array[i], array[j]];
			}
		}
	}
	return result;
}
let array = [1, 2, 3, 7, 3, 9];
console.log(difference(array, 4));
console.log(difference(array, 7));
console.log(difference(array, 5));
console.log(difference(array, 10));

