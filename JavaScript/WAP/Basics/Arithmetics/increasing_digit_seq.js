// Write a JavaScript program to check whether a given integer has an increasing digits sequence
function sequence(num)
{
	let prevDigit = Math.floor(num % 10);
	while(num != 0)
	{
		num = num / 10;
		let currDigit = Math.floor(num % 10);
		if(currDigit > prevDigit) return false;
		prevDigit = currDigit;
	}
	return true;
}
console.log(sequence(123));
console.log(sequence(321));