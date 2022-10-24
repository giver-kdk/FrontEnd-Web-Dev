// Write a JavaScript program to check whether a given number is in a given range
function in_range(a, b, c)
{
	if(b >= a && b <= c) return true;
	else return false;
}

console.log(in_range(1, 2, 3));
console.log(in_range(3, 6, 1));
console.log(in_range(2, 5, 9));