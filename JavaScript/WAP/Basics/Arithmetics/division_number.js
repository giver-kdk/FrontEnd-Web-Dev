// Write a JavaScript program that takes two integers and a divisor. If the given divisor divides both integers and it does not divide either, then two given integers are similar. Check whether two given integers are similar or not.
function check(num1, num2, divisor)
{
	if((num1 % divisor == 0) && (num2 % divisor == 0))
	{
		return "Numbers are similar";
	}
	else 
	{
		return "Numbers are different";
	}
}
console.log(check(10, 20, 5));
console.log(check(10, 12, 5));
console.log(check(6, 12, 3));