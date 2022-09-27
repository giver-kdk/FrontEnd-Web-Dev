// Write a JavaScript program to find the largest of three given integers.
function largest(a, b, c)
{
	if(a > b && b > c) return a;
	else if(b > a && a > c) return b;
	else return c;
}

console.log("Largest number is: " + largest(1, 2, 3));
console.log("Largest number is: " + largest(10, 22, 3));
console.log("Largest number is: " + largest(30, 5, 60));