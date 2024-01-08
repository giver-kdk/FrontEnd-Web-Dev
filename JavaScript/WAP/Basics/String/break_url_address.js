// Write a JavaScript program to break an address of an url and put it's part into an array.
let url = "https://www.w3resource.com/javascript-exercises/";

function break_url(url)
{
	let first = url.split("://");
	let second = first[1].split(".com");
	let third = second[1].replaceAll("/", "");
	let result = [first[0], second[0], third];
	return result;
}
console.log(break_url(url));