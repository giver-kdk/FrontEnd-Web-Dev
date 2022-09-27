// Write a JavaScript program to check whether a string starts with 'Java' and false otherwise

// Logic One
function check1(string)
{
	let reg = /Java/y;			// Sticky Search
	if(string.match(reg, 0)) return true;
	else return false;
}
console.log("Logic One\n");
console.log(check1("JavaScript is Crazy"));
console.log(check1("Java is a Programming Language"));
console.log(check1("I love JavaScript"));
console.log(check1("I like Java"));
console.log(check1("Learn JavaScript"));

// Logic Two
function check2(string)
{
	let first = string.slice(0, 4);
	if(first == "Java") return true;
	else return false;
}

console.log("\nLogic Two\n");
console.log(check2("JavaScript is Crazy"));
console.log(check2("Java is a Programming Language"));
console.log(check2("I love JavaScript"));
console.log(check2("I like Java"));
console.log(check2("Learn JavaScript"));