// sort() method can also sort numerically in ascending order if a compare function is provided as argument
// Compare function is similar to CMP instruction in Microprocessor
// CMP compares numbers by subtracting operand. Similary, compare function returns subtracted values.
// If (a - b) > 0, then 'a' is placed before 'b'
// If (a - b) < 0, then 'b' is placed before 'a'
// If (a - b) = 0, then no change in position
let numbers = [20, 100, 400, 50, 1];
function numerical(a, b)
{
	// Sorts on the basis of value of 'a' and 'b'
	return (a - b);
	// return (b - a);     // Sorts in descending order
}
numbers.sort(numerical);
console.log(numbers);