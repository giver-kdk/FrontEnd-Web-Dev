// Write a JavaScript program to replace the first digit in a string (should contains at least digit) with $ character
function rep_digit(string)
{
	for(let i = 0; i < string.length; i++)
	{
		if(string[i] >= "0" && string[i] <= "9")
		{
			let first = string.slice(0, i);
			let last = string.slice(i + 1, string.length);
			return first + "$" + last;
		}
	}
	return string;
}
console.log(rep_digit("Hel3lo"));
console.log(rep_digit("1ello"));
console.log(rep_digit("Hell2"));