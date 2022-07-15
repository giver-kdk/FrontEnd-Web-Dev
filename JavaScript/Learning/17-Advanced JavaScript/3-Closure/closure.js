/*
Closure is combination of 'nested function' and 'parent function's variables' enclosed together.
We know, When a parent function has a child function, the child can access all variables of parent.
But if we use child function outside the parent function, can it still use parent's data?
Answer is 'YES', cause a 'Closure'(combo of child function and parent data) is created at every function creation.
The child function gets the parent's data from that 'Closure' even though parent function is finished executing.

So, basically...every child function remembers its parents data

'Closure' feature helps to protect data 

*/

function parent()
{
	let parentData = 10;
	console.log("Parent Data is: ", parentData);

	function child()
	{
		console.log("I got the data: ", parentData);
	}
	console.log("Accessing Parent Data inside Parent Function");
	child();
	return child;					// Returns (child + parent's data) as 'Closure'
}


let outerChild = parent();			// Parent returns 'child' function 

console.log("Accessing Parent Data outside Parent Function");
outerChild();						// Using 'child' function outside 'parent' function