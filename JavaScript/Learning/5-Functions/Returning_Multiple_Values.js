// In JS if we want to return multiple values, we can return it as an array/object of results

// Returning array 
function returnArray(a, b)
{
	let sum = a + b;
	let product = a * b;
	return [sum, product];		
	// let array = [sum, product];
	// return array;						// Valid
}

let answer = returnArray(2, 3);
console.log(answer);




// Returning object 
function returnObject(a, b)
{
	let sum = a + b;
	let product = a * b;
	return {sum, product};										// key = variable_name and value = variable_value	
	// return {"Addition": sum, "Multiplication": product};		// key = "Addition" and value = sum		
	// let object = {sum, product};
	// return object;											// Valid
}

let result = returnObject(2, 3);
console.log(result);
