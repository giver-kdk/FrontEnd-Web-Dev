// Write a JavaScript program to check whether a given matrix is an identity matrix

let matrix = [
	[1, 0, 0],
	[0, 1, 0],
	[0, 0, 1]
];

function identity(matrix)
{
	for(let i = 0; i < matrix.length; i++)
	{
		for(let j = 0; j < matrix.length; j++)
		{
			if(i == j)
			{
				if(matrix[i][j] != 1) return false;
			}
			else
			{
				if(matrix[i][j] != 0) return false;
			}
		}
	}
	return true;
}
console.log(identity(matrix));

matrix = [
	[1, 1, 0],
	[0, 1, 0],
	[0, 0, 1]
];
console.log(identity(matrix));