// Write a JavaScript program to create a string using the middle three characters
//  of a given string of odd length. The string length must be greater or equal to three

function create(string)
{
	if(string.length >= 3)
	{
		if(string.length % 2 != 0)
		{
			let sideMid = ((string.length - 1) / 2) - 1;
			let mid = string.slice(sideMid, sideMid + 3);
			console.log(mid);
		}
		else
		{
			console.log("String length must be odd");
		}
	}
	else
	{
		console.log("String length is less than 3");
	}
}

create("Giver");
create("JavaScripts");
create("Khadka");
create("Python");
create("Hi");