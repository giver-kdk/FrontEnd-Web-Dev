// Write a JavaScript program to check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions
function check(string)
{
	let lowerCount = 0;
	let upperCount = 0;
	let reg = /([a-zA-Z])*/g;
	let smallCase = /[a-z]/g;
	let bigCase = /[A-Z]/g;
	if(string == string.match(reg)[0])
	{
		for(let i = 0; i < string.length - 1; i++)
		{
			let adjLower = (smallCase.test(string[i]));
			smallCase.lastIndex = 0;
			adjLower = adjLower && (smallCase.test(string[i + 1]));
			let adjHigher = (bigCase.test(string[i]));
			bigCase.lastIndex = 0;
			adjHigher = adjHigher && (bigCase.test(string[i + 1]));
			if(adjLower || adjHigher)
			{
				console.log("Cased letters are adjuscent");
				return;
			}
		}
		console.log("Cased letters are free from adjuscent");
	}
	else 
	{
		console.log("Invalid String");
	}
}

check("Hello");
check("GiVeR");
check("KhAdka");
check("NePAL");