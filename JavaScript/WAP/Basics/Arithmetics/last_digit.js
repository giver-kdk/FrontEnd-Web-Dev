// Write a JavaScript program to check whether the last digit of the three given positive integers is same
function check(a, b, c)
{
	let last1 = a % 10;					// Get the last digit of number
	
	let last2 = b % 10;
	let last3 = c % 10;
	if((last1 == last2) && (last2 == last3)) return true;
	else return false;
}

console.log(check(12, 32 ,42));
console.log(check(504,3234 ,9224));
console.log(check(12, 32 ,40));
console.log(check(12, 3 ,44));