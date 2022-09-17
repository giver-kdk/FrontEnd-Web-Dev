// Create empty array to store typed key
let input = [];
let info = document.querySelector(".info");
function check_sequence(e)
{
	// Define secret key pattern
	let pattern = "giver";
	input.push(e.key);
	let reachedLimit = input.length > pattern.length;
	// Separate last 5(string lenght) character word if limit crossed
	if(reachedLimit)
		input = input.slice(Math.abs(input.length - pattern.length), input.length);
	console.log(input);
	// Convert the input array into string and compare
	if(input.join("") == pattern) info.style.display = "flex";
}
document.addEventListener("keypress", check_sequence);