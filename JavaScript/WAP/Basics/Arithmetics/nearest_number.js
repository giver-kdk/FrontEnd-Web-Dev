// Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.
function nearest(a, b)
{
	let diff1 = Math.abs(100 - a);
	let diff2 = Math.abs(100 - b);
	if(diff1 < diff2) return a;
	else return b;
}

console.log(`Number nearest to 100 is ${nearest(21, 69)}`);
console.log(`Number nearest to 100 is ${nearest(-50, 500)}`);
console.log(`Number nearest to 100 is ${nearest(90, 102)}`);