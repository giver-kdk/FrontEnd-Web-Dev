// Write a JavaScript program to capitalize the first letter of each word of a given string.
function capitalize(string)
{
	// Convert string into array of words
	let array = string.split(" ");
	// Replace each word with "capitalized first character" word
	for(i = 0; i < array.length; i++)
	{
		array[i] = array[i][0].toUpperCase() + array[i].slice(1);
	}
	console.log(array.join(" "));
}

capitalize("giver is a cool guy");
capitalize("hari is on his holiday");
capitalize("abin is playing football");