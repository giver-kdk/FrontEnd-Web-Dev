// Write a JavaScript program to find the larger number from the two given positive integers,
// If the two numbers are in the range 40..60 inclusive. 

function largest(a, b)
{
	let inRange = (a >= 40 && a <= 60) && (b >= 40 && b <= 60);
	if(inRange)
	{
		console.log(`Largest number is ${a > b ? a : b}`);
	}
	else
	{
		console.log(`Numbers are not within the range`);
	}
}

largest(2, 3);
largest(50, 45);
largest(20, 50);
largest(45, 60);