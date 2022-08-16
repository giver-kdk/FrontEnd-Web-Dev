// Function expression means assigning an entire function into a variable
// The function should be called using that variable
// The varibale doesn't loose its originnal property
// The fuction name is local to the function scope. i.e; we can't call the function using function name
/*
syntax:
	variable = function function_name(parameters)
	{
		// statement
	}
*/
let s1 = "Giver", s2 = "Ram";
let show = function print(user)
{
	console.log("Hello " + user);
}
// print();							// Not Allowed
// Using variable to call function
show(s1);
show(s2);
// Using varibale normally
show = 5;
console.log(show);
