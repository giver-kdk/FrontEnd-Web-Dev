// Write a JavaScript program to create the dot products of two given 3D vectors
let vec1 = [2, 3, 4];
let vec2 = [4, 5, 6];

function dot_product(vector1, vector2)
{
	if(vector1.length != vector2.length)
	{
		console.log("The vector dimension dit not match");
	}
	else
	{
		let sum = 0;
		for(let i = 0; i < vector1.length; i++)
		{
			sum += vector1[i] * vector2[i];
		}
		console.log("Dot product is: " + sum);
	}
}

dot_product(vec1, vec2);