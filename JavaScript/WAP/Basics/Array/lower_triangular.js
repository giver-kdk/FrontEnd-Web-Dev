// Write a JavaScript program to check whether a given matrix is lower triangular or not
let matrix = [
	[1, 0, 0],
	[1, 2, 0],
	[1, 2, 3]
];
function lower_triangular(matrix)
{
	for(let i = 0; i < matrix[0].length; i++)
	{
		for(let j = 0; j < matrix.length; j++)
		{
			if(j > i)
			{
				if(matrix[i][j] != 0) return false;
			}
		}
	}
	return true;
}
console.log(lower_triangular(matrix));

matrix = [
	[1, 0, 3],
	[1, 2, 0],
	[1, 2, 3]
];
console.log(lower_triangular(matrix));