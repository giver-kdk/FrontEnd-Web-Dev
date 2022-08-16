// sort() method is used to sort array alphabetically in ascending order
// It treats array elements as strings and sort accordingly
// So, when sorting numbers, 20 > 100 because 2 > 1 alphabetically (ASCII value) 
// Original array is modified while sorting
let group = ["Giver", "Abindra", "Smith", "Nirajan"];
let numbers = [20, 100, 400, 50, 1];

group.sort();
numbers.sort();

console.log(group);
console.log(numbers);