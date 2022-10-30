// every() runs user-derfined function on each element of array
// And return true only if all elements pass the test(condition)
// If one of the elements fails the test, then it returns 'false'
// Parameters of user-defined function: element, index and array itself

let array = [2, 4, 6, 8, 10];

// Here, only a single boolean value is returned by "every()"
let isDivisible = array.every(elem => 
	{
		if(elem % 2 == 0)
		{
			return true;
		}
	})
console.log(isDivisible);