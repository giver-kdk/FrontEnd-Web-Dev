// Write a JavaScript program to find all distinct prime factors of a given integer.
function prime_factor(num)
{
	let i = 2;
	let result = [];
	function is_prime(n)
	{
		let count = 0;
		for(let i = 1; i  <= n; i++)
		{
			if(n % i == 0)
			{
				count++
			}
		}
		if(count == 2) return true;
		else return false;
	}
	while(num != 1)
	{
		if(num % i == 0)
		{
			if(!result.includes(i) && is_prime(i))
			{
				result.push(i);
			}
			num = num / i;
		}
		else
		{
			i++;
		}
	}
	console.log(result);

}
prime_factor(100);
prime_factor(200);
prime_factor(456);
