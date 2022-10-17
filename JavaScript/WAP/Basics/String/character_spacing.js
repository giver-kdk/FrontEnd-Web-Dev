// Write a JavaScript program to check whether the characters a and b 
// are separated by exactly 3 places anywhere (at least once) in a given string

// Method 1
function check(string)
{
	let index1, index2;
	for(i = 0; string.includes("a", i); i = string.indexOf("a", i) + 1)
	{
		index1 = string.indexOf("a", i);
		for(j = 0; string.includes("b", j); j = string.indexOf("b", j) + 1)
		{
			index2 = string.indexOf("b", j);
			if(Math.abs(index2 - index1) == 4)
			{
				return true;
			}
		}
	}
	return false;
}
console.log("Method 1\n");
console.log(check("I am abroad"));
console.log(check("She is a beautiful girl"));
console.log(check("He is a bald guy"));
console.log(check("Elon Musk have boring company"));



// Method 2
function check_space(string)
{
	let reg1 = /a...b/g;				// "." means can have any single character
	let reg2 = /b...a/g;
	if(string.match(reg1) || string.match(reg2)) return true;
	else return false;
}

console.log("Method 2\n");
console.log(check_space("I am abroad"));
console.log(check_space("She is a beautiful girl"));
console.log(check_space("He is a bald guy"));
console.log(check_space("Elon Musk have boring company"));

