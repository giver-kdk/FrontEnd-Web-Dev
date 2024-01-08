function swap(string)
{
	let firstChar = string[0];
	let lastChar = string[string.length - 1];
	let middle = string.slice(1, string.length - 1);
	if(string.length > 1)
		return lastChar + middle + firstChar;
	else
		return string;
}
console.log(swap("Giver"));
console.log(swap("Khadka"));
console.log(swap("Coder"));