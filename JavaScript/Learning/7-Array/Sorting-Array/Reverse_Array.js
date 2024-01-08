// reverse() method just reverses the position of array elements
// The original array is modified when reversing
// Hence, array sorted in ascending order can be reversed to sort in descending order
let group = ["Giver", "Abindra", "Smith", "Nirajan"];
let numbers = [20, 100, 400, 50, 1];

function numerical(a, b)
{
	return (a - b);
};
// Sorting in Ascending Order
group.sort();
numbers.sort(numerical);
console.log(group);
console.log(numbers);
// Sorting in Descending Order
group.reverse();					// Reverse the sorted array
numbers.reverse();
console.log(group);
console.log(numbers);