// Write a JavaScript program to check whether a given fraction is proper or not.
function proper_test(nume, deno)
{
	if(((nume / deno) < 1) && ((nume / deno) > 0))
	{
		return true;			// Proper Fraction
	}
	else return false;			// IMproper Fraction
}
console.log(proper_test(12, 24));
console.log(proper_test(32, 4));
console.log(proper_test(10, 12));