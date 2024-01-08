function sub(a, b)
{
	console.log("Difference of two nmubers: " + (a - b));
}

function divide(a, b)
{
	console.log("a divided by b: " + (a / b));
}

function multiply(a, b)
{
	console.log("Product of two numbers: " + (a * b));
}

// All in one export of Name Export
export {sub, divide};
// All in one export of Default Export
export default multiply;