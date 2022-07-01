// The parameters in function can have default values if not provided while calling function
// The vallues should be assigned from Right-to-Left

// Function with 4 parameters in which 2 are default 
function add(a, b, c = 3, d = 5)
{
	return (a + b + c + d);
}
// Calling function having 4 parameters with only 2 arguments
console.log(add(2, 4));