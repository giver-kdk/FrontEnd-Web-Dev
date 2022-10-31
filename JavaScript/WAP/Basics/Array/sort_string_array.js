// Write a JavaScript program to sort the strings of a given array of strings in the order of increasing lengths
let array = ["aaaaa", "aaa", "aaa", "aaaa", "a"];

function sort_string(array)
{
	array.sort((a, b) =>
		{
			return (a.length - b.length);
		});
	return array;
}

console.log(sort_string(array));