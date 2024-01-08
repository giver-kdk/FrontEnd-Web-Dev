// Write a JavaScript program to check whether a given string represents a correct sentence or not.
// A string is considered correct sentence if it starts with the capital letter and ends with a full stop (.)

function correctness(sentence)
{
	let reg = /^[A-Z].*\.$/g;
	if(reg.test(sentence))
	{
		return "The sentence is correct";
	}
	else
	{
		return "The sentence is incorrect";
	}
}

console.log(correctness("I am a boy."));
console.log(correctness("he plays football."));
console.log(correctness("She is good at basketball"));
console.log(correctness("I like to travel."));

