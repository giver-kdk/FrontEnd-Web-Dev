// Write a JavaScript program to extract the first half of a string of even length.
function extract(string)
{
	if(string.length % 2 == 0)
	{
		let half = string.slice(0, (string.length / 2));
		console.log(half);
	}
	else
	{
		console.log("Error...Odd string length detected");
	}
}

extract("Giver")
extract("Khadka")
extract("Hell")