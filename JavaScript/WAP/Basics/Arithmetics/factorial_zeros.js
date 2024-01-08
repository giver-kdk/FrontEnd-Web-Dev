// Write a JavaScript program to find the number of trailing zeros in the decimal representation of the factorial of a given number

function count_zero(number)
{
	let fact = 1;
	let count = 0;
	for(let i = number; i >= 1; i--)
	{
		fact = fact * i;
	}
	while(fact != 0)
	{
		if(fact % 10 != 0)
		{
			break;
		}
		fact = fact / 10;
		count++;
	}
	return count;
}

console.log(count_zero(8));
console.log(count_zero(16));
console.log(count_zero(20));