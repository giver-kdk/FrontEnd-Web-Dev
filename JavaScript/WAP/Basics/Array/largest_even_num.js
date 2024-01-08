// Write a JavaScript program to get the largest even number from an array of integers
let array = [1, 2, 3, 4, 5, 6];

function largest(arr)
{
	let largest = 0;
	array.forEach(elem =>
		{
			if((elem % 2 == 0) && largest < elem)
			{
				largest = elem;
			}
		})
		return largest;
	}
	
console.log(largest(array));

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(largest(array));