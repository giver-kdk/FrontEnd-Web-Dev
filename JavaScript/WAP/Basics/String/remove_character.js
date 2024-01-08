// Write a JavaScript program to remove a character at the specified position of a given string
// Return the new string.
function remove_char_at(string, index)
{
	let first = string.slice(0, index);
	let last = string.slice(index + 1, string.length);
	return (first + last);
}

let string = "Giver Khadka";
console.log(remove_char_at(string, 3));
console.log(remove_char_at(string, 1));
console.log(remove_char_at(string, 5));
console.log(remove_char_at(string, 8));
