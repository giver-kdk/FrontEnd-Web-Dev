// Write a JavaScript program to convert the letters of a given string in alphabetical order
function sorting(string){
	let array = string.split("");
	array = array.sort();
	return array.join("");
}
console.log(sorting("Giver"));
console.log(sorting("khadka"));
console.log(sorting("hello"));