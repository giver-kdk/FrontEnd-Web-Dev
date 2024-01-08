// Write a JavaScript program to check from two given integers whether one of them is 8
// or their sum or difference is 8
function check(a, b)
{
	if(a == 8 || b == 8) return "One of the numbers is 8";
	else if(a + b == 8) return "Sum of the numbers is 8";
	else if(Math.abs(a - b) == 8) return "Difference of the numbers is 8";
	else return "No relation with 8";
}

console.log(check(2, 6));
console.log(check(8, 6));
console.log(check(10, 18));
console.log(check(24, 16));
console.log(check(1, 3));