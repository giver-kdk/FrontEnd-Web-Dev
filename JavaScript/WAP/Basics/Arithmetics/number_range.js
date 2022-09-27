// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive)
//  Return true if either of them are in the said range.
function check(a, b)
{
	let inRange = (a >= 50 && a <=99) || (b >=50 && b <=90);
	if(inRange)
	{
		return true;
	}
	else
	{
		return false;
	}
}
console.log(check(2, 50));
console.log(check(50, 60));
console.log(check(2, 3));
console.log(check(20, 30));
console.log(check(80, 3));