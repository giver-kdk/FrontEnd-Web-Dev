// Write a JavaScript program to compute the sum of the two given integers,
// If the sum is in the range 50..80 return "within range" other wise return "not within range".
function sum(a ,b)
{
	let sum = a + b;
	if(sum >=50 && sum <= 80) return "Sum is within Range";
	else return "Sum is not within Range";
}

console.log(sum(2, 3));
console.log(sum(30, 26));
console.log(sum(60, 5));
console.log(sum(20, 15));