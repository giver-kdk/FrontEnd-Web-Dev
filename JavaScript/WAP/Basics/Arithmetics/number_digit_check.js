// Write a JavaScript program to check from three given numbers (non negative integers)
// That two or all of them have the same rightmost digit
function check(a, b, c)
{
	let allHasSameDigit = (a % 10 == b % 10) && (b % 10 == c % 10);
	let twoHasSameDigit = (a % 10 == b % 10) || (b % 10 == c % 10) || (a % 10 == c % 10);
	if(allHasSameDigit) console.log("All three numbers have same right most digit");
	else if(twoHasSameDigit) console.log("Atleast two numbers have same right most digit");
	else console.log("None of the numbers have same right most digit");
}
check(123, 23, 3);
check(1234, 230, 34);
check(456, 345, 50);
check(100, 200, 500);