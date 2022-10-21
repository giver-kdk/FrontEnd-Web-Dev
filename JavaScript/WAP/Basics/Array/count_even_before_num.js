// Write a JavaScript program to find the number of even values in sequence before the first occurrence of a given number
function even_num(array, num)
{
	let count = 0;
	for(let i = 0; i < array.length; i++)
	{
		if(array[i] == num) break;
		if(array[i] % 2 == 0) count++;
	}
	console.log(count);
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
even_num(array, 5);
even_num(array, 9);