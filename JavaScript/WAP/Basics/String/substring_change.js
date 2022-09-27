// Write a JavaScript program to create a new string from a given string taking the last 3 characters
// And added at both the front and back. The string length must be 3 or more.
function substring_change(string)
{
	let lastSub = string.slice(string.length - 3, string.length);
	return lastSub + string + lastSub;
}

console.log(substring_change("Giver"));
console.log(substring_change("Khadka"));
console.log(substring_change("Nepal"));