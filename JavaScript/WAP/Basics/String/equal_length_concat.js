// Write a JavaScript program to concatenate two strings and return the result.
//  If the length of the strings are not same then remove the characters from the longer string

function combine(string1, string2)
{
	if(string1.length == string2.length)
	{
		return (string1 + string2);
	}
	else
	{
		let subStr;
		if(string1.length > string2.length)
		{
			subStr = string1.slice(string1.length - string2.length, string1.length);
			return (subStr + string2);
		}
		else
		{
			subStr = string2.slice(string2.length - string1.length, string2.length);
			return (string1 + subStr);
		}
	}
}

console.log(combine("Giver", "Nepal")); 
console.log(combine("Khadka", "India"));
console.log(combine("Hello", "International"));