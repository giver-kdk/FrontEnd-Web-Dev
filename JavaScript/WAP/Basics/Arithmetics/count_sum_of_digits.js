// Write a JavaScript program to find the number of times to replace a given number with the sum of its digits until it convert to a single digit number
function count_sum(number)
{
	let count = 0;
	let sum = 0;
	while(number != 0)
	{
		let rem = number % 10;
		sum += rem;
		number = Math.floor(number / 10);
		if(number == 0)
		{
			count++;
			if(Math.floor(sum / 10) == 0)
			{
				return count;
			}
			else
			{
				number = sum;
				sum = 0;
			}
		}
	}
}
console.log(count_sum(123));
console.log(count_sum(1234));
console.log(count_sum(67896789991238));
console.log(count_sum(12));