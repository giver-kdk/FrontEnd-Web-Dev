// Write a JavaScript program to check whether a given array of integers represents either a strictly increasing or a strictly decreasing sequence
let array = [1, 2, 3, 4, 5];

function check(array)
{
	if(array[1] > array[0])
	{
		for(let i = 0; i < array.length - 1; i++)
		{
			if(array[i + 1] < array[i])
			{
				return "No Sequence";
			}
		}
		return "Ascending Sequence";
	}
	else
	{
		for(let i = 0; i < array.length - 1; i++)
		{
			if(array[i + 1] > array[i])
			{
				return "No Sequence";
			}
		}
		return "Descending Sequence";
	}
}

console.log(check(array));

array = [5, 4, 3, 2, 1];
console.log(check(array));

array = [1, 5, 2, 7, 3];
console.log(check(array));