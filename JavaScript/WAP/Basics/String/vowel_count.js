// Write a JavaScript program to count the number of vowels in a given string. 
function count_vowel(string)
{
	let reg = /[aeiou]/gi;
	if(string.match(reg)) return (string.match(reg)).length;
	else return 0;
}
console.log(count_vowel("Giver"));
console.log(count_vowel("Khadka"));
console.log(count_vowel("Amphibian"));