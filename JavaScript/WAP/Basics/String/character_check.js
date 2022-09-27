// Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.
let string = "giver";
function check_char(ch)
{
	let subStr = string.slice(1, 4);
	if(subStr.match(ch)) return true;
	else return false;
}

console.log(check_char('g'));
console.log(check_char('i'));
console.log(check_char('v'));
console.log(check_char('e'));
console.log(check_char('r'));