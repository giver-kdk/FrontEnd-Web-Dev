// Write a JavaScript program to find the number which appears most in a given array of integers
let array = [1, 2, 4, 4, 4, 2];

function frequent(array)
{
	let maxElem = array[0];
	let freq = 0;
	for(let i = 0; i < array.length; i++)
	{
		let elem = array[i];
		let count = 0;
		for(let j = 0; j < array.length; j++)
		{
			if(array[j] == elem)
			{
				count++;
			}
		}
		if(freq < count)
		{
			freq = count;
			maxElem = elem;
		}
	}
	return maxElem;
}
console.log(frequent(array));

array = [1, 2, 3, 3, 3, 3, 4, 4, 5];
console.log(frequent(array));