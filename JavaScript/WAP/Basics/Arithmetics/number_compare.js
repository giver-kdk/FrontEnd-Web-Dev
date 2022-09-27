// Write a JavaScript program to check three given numbers, 
// If the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.
function check(a, b, c)
{
	if(a == b && b == c) return 30;
	else if(a == b || b == c || a == c) return 40;
	else return 20;
}

console.log(check(2, 3, 4));
console.log(check(20, 20, 20));
console.log(check(54, 32, 54));