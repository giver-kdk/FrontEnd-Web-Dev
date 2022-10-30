// Write a JavaScript program to find the smallest prime number strictly greater than a given number
function greater_prime(num)
{
	let count;
	for(let i = num + 1; count != 2; i++)
	{
		count = 0;
		for(let j = 1; j <= i; j++)
		{ 
			if(i % j == 0)
			{
				count ++;
			}
		}
		if(count == 2)
		{
			return i;
		}
	}
}
console.log(greater_prime(12));
console.log(greater_prime(5));
console.log(greater_prime(300));