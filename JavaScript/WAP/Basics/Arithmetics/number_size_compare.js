// Write a JavaScript program to check from three given integers
// That whether a number is greater than or equal to 20 and less than one of the others
function check(a, b, c)
{
	if(a >= 20 && (a < b || a < c))
	{
		console.log(`${a} is greater than or equal to 20`);
	}
	else if(b >= 20 && (b < a || b < c))
	{
		console.log(`${b} is greater than or equal to 20`);
	}
	else if(c >= 20 && (c < a || c < b))
	{
		console.log(`${c} is greater than or equal to 20`);
	}
	else
	{
		console.log("None of the numbers satisfy the conditon");
	}
}

check(25, 30, 40);
check(40, 30, 60);
check(10, 50, 60);
check(45, 60, 30);
check(120, 10, 5);
