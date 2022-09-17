// Write a JavaScript program to check from two given integers, 
// whether one is positive and another one is negative.

function check_sign(num1, num2)
{
	if((num1 > 0 && num2 < 0) || (num2 > 0 && num1 < 0)) return true;
	else return false;
}

console.log(check_sign(2, 3));
console.log(check_sign(-2, -3));
console.log(check_sign(-2, 3));
console.log(check_sign(2, -3));