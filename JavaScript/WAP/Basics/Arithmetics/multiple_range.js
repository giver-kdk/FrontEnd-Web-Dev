// Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive
function check(a, b)
{
	let firstInRange = (a >= 40 && a <= 60) || (a >= 70 && a <= 100);
	let secondInRange = (b >= 40 && b <= 60) || (b >= 70 && b <= 100);
	if(firstInRange || secondInRange) return true;
	else return false;
}

console.log(check(2, 3));
console.log(check(40, 90));
console.log(check(4, 50));
console.log(check(10, 80));
console.log(check(20, 65));