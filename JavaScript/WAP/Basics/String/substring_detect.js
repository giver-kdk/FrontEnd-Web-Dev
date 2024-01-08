// Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string,
// if "Script" presents in the string return the string without "Script" otherwise return the original one. 
function filter_str(string)
{
	let testStr = string.slice(4, 10);
	if(testStr == "Script")
	{
		let removedStr = string.slice(0, 4) + string.slice(10, string.length);
		
		return removedStr;
	}
	else
	{
		return string;
	}
}

console.log(filter_str("JavaScript is good"));
console.log(filter_str("Java is not JavaScript"));
console.log(filter_str("FilmScript means a movie script"));