// Write a JavaScript program to find the maximum integer n such that 1 + 2 + ... + n <= a given integer
function max_integer(num)
{
	let sum = 0, i = 1; 
	for(i = 1; sum <= num; i++)
	{
		sum = sum + i;
	}
	// "i" is un-neccessarily incremented twice. So, decrement
	return i - 2;
}
console.log(max_integer(5));
console.log(max_integer(11));
console.log(max_integer(15));