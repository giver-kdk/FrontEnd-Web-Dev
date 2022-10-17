// Write a JavaScript program to check whether a given string contains equal number of p's and t's.
function check(string)
{
	let reg1 = /[p]/gi;
	let reg2 = /[t]/gi;
	if(string.match(reg1).length == string.match(reg2).length) return true;
	else return false;
}
console.log(check("Alphabet is a popular term"));
console.log(check("People love to travel"));
console.log(check("Pendrive is a technological device"));
console.log(check("Ppppp and Ttttt are different"));