function swap(string)
{
	let firstChar = string[0];
	let lastChar = string[string.length - 1];
	if(string.length > 1)
	{
		string = string.replace(lastChar, firstChar);
		string = string.replace(firstChar, lastChar)
		string[string.length - 1] = firstChar;
		return string;
	}
	else
	{
		return string;
	}
}
console.log(swap("Giver"));
console.log(swap("Khadka"));
console.log(swap("Coder"));