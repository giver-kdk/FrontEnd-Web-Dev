// Write a JS program to check whether a given positive number is a multiple of 3 or a multiple of 7
function check_multiple(number)
{
	let divisible = number % 3 == 0 || number % 7 == 0;
	if(divisible)
	{
		if(number % 3 == 0)
		{
			if(number % 7 == 0) console.log("Number is divisible by 3 and 7");
			else console.log("Number is divisible by 3");
		}
		else console.log("Number is divisible by 7");
	}
	else console.log("Number is neither divisible by 3 nor by 7");
}

check_multiple(6);
check_multiple(9);
check_multiple(14);
check_multiple(21);
check_multiple(25);