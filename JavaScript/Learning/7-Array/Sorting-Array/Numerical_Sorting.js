// sort() method can also sort numerically in ascending order if a compare function is provided as argument
// Compare function simply specifies what sorting algorithm to use according to programmer
// Compare function is similar to CMP instruction in Microprocessor
// CMP compares numbers by subtracting operand. Similary, compare function can return subtracted values.

// Here, `a` and `b` represents any two array elements
// If `return value` < 0, then 'a' is placed before 'b'
// If `return value` = 0, then no change in position
// If `return value` > 0, then 'b' is placed before 'a'
/*
	Eg: 
		a = 10 and b = 5, then:
		return (10 - 5) means return 5 which is > 0.
		So, b = 5 will be placed before a = 10 (Ascending Order)

*/
let numbers = [20, 100, 400, 50, 1];
function numerical(a, b)
{
	// Sorts on the basis of value of 'a' and 'b'
	return (a - b);
	// return (b - a);     // Sorts in descending order
}
numbers.sort(numerical);
console.log(numbers);