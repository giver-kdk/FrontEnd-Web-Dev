// Write a JavaScript code to divide a given array of positive integers into two parts. First element goes to first part, second element goes to second part, and third element goes to first part and so on. Now compute the sum of two parts and store into an array of size two.

let array = [1, 2, 3, 4, 5, 6];
let result = [0, 0];

array.forEach((elem, ind) =>
{
	if(ind % 2 == 0)
	{
		result[0] += elem;
	}
	else
	{
		result[1] += elem;
	}
})

console.log(result);
