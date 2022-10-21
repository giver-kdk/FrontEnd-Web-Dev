// Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result
function divide(num1, num2)
{
	if(num2 ==1)
	{
		return num1;
	}
	while(true)
	{
		if(num1 % num2 != 0)
		{
			return num1;
		}
		else
		{
			num1 = num1 / num2;
		}
	}
}
console.log(divide(12, 2));
console.log(divide(12, 1));
console.log(divide(30, 5));
