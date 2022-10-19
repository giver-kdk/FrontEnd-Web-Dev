// Write a JavaScript program to switch case of the minimum possible number of letters to make a given string written in the upper case or in the lower case. Go to the editor
// Fox example "Write" will be write and "PHp" will be "PHP"
function flip_case(string)
{
	let upperCount = 0;
	let lowerCount = 0;

	string.split("").forEach((letter) =>
	{
		let isCapital = (letter.charCodeAt(0) >= 65) && (letter.charCodeAt(0) <= 90);
		if(isCapital) upperCount++;
		else lowerCount++;
	})
	if(upperCount > lowerCount) return string.toUpperCase();
	else return string.toLowerCase();

}
console.log(flip_case("Giver"));
console.log(flip_case("HELLo"));
console.log(flip_case("worlD"));
