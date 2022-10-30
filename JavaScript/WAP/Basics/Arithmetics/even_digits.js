// Write a JavaScript program to find the number of even digits in a given integer
function even_digit(num)
{
	let count = 0;
	while(num != 0)
	{
		let remainder = num % 10;
		if(remainder % 2 == 0) count++;
		num = Math.floor(num / 10);
	}
	return count;
}
console.log(even_digit(1234));
console.log(even_digit(1224448));
console.log(even_digit(4569870));