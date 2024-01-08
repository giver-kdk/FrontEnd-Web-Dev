// Write a JavaScript program to concatenate two strings except their first character.
function combine(string1, string2)
{
	let sub1 = string1.slice(1, string1.length);
	let sub2 = string2.slice(1, string2.length);
	return sub1.concat(sub2);
}

console.log(combine("Giver", "Khadka"));
console.log(combine("Python", "JavaScript"));
console.log(combine("Hello", "World"));