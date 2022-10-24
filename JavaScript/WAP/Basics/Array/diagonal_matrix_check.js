// Write a JavaScript program to check whether a matrix is a diagonal matrix or not. 
// In linear algebra, a diagonal matrix is a matrix in which the entries outside the main diagonal are all zero (the diagonal from the upper left to the lower right).
let array = [
	[1, 0, 0],
	[0, 2, 0],
	[0, 0, 3]
];

function diagonal(matrix)
{
	if(array.length != array[0].length)
	{
		return "It should be a square matrix";
	}
	else
	{
		for(let i = 0; i < array.length; i++)
		{
			for(let j = 0; j < array.length; j++)
			{
				if(i != j)
				{
					if(array[i][j] != 0)
					{
						return "It is not a diagonal matrix";
					}
				}

			}
		}
		return "It is a diagonal matrix";
	}
}
console.log(diagonal(array));
array = [
	[1, 1, 0],
	[0, 2, 0],
	[0, 0, 3]
];
console.log(diagonal(array));
array = [
	[1, 0, 0],
	[0, 2, 0],
	[1, 0, 3]
];
console.log(diagonal(array));