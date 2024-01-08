// Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer

function sort_prime(num)
{
	let array = [];
	for(let i = 1; i <= num; i++)
	{
		let count = 0;
		for(let j = 1; j <= num; j++)
		{
			if(i % j == 0) count++;
		}
		if(count == 2)
		{
			array.push(i);
		}
	}
	console.log(array);
}

sort_prime(50);
sort_prime(100);