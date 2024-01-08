// Write a JavaScript program to replace every character in a given string
// With the character following it in the alphabet.
function encode(string)
{
	let result = [];
	for(i = 0; i < string.length; i++)
	{
		let code = string.charCodeAt(i);
		switch(string[i]){
			case "z":
				code = 97;		// Unicode of "a"
				break;
			case "Z":
				code = 65; 		// Unicode of "A"
				break;
			default: 
				code++;	
		}
		result.push(String.fromCharCode(code));			// Convert the incremented unicode into character
	}
	return result.join("");
}

console.log(encode("Giver"));
console.log(encode("Khadka"));
console.log(encode("Zoo"));
