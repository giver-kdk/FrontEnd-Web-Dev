// In function expression, the function is assigned to a variable
// We know, variable can be passed as argument and can be returned from function 
// The function can now be treated as variable in some ways
// So, indirectly function assigned to variable can also be passes as argument in other functions


let say = function display()
{
	console.log("Hello Aliens");
}
function print()
{
	console.log("Hello Humans");
}

function execute(variable)
{
	// Calling the function from variable
	variable();
}
// Passing variable as argument. Indirectly passing function to the function
execute(say);
// Passing function name as argument. Direclty passing function to the function
execute(print);
