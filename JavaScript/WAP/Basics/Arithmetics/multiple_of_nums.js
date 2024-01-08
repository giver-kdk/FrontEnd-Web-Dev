// Write a JavaScript program to check two given non-negative integers that 
// Whether one of the number (not both) is multiple of 7 or 11
function check(a, b)
{
	let isMultiple = (a % 7 == 0 || a % 11 == 0) || (b % 7 == 0 || b % 11 == 0);
	let bothMultiple = ((a % 7 == 0 || a % 11 == 0) && (b % 7 == 0 || b % 11 == 0));
	if(isMultiple && !bothMultiple)
	{
		console.log("Only one of the number is multiple of 7 or 11");
	}
	else
	{
		console.log("Both numbers are either multiple or non-multiple of 7 or 11");
	}
}
check(7, 14);
check(10, 14);
check(66, 20);
check(121, 21);
check(35, 24);