// Write a JavaScript program to create a new string of specified copies (positive number) of a given string
function replicate(string, num)
{
	let result = "";
	if(num < 0)
	{
		return false;
	}
	else
	{
		for(i = 0; i < num; i++)
		{
			result = result + string;
		}
		return result;
	}
}

console.log(replicate("Giver", 3));
console.log(replicate("Hello", -1));
console.log(replicate("Khadka", 1));
console.log(replicate("Haha", 0));