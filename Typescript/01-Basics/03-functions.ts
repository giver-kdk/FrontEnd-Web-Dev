// Specify sunftion return type by type name after function name 
function greet() : void						// 'void' returns nothing
{
	console.log("Hello World");
}
greet();


// Function with typed parameter
function sum(num1: number, num2: number) : number			// Parameters can't be left type less
{
	return num1 + num2;
}
console.log("Sum is: " + sum(4, 5));


// Optional Function Parameters
// '?' makes the paramter optional
function multiply(num1: number, num2: number, num3?: number) : number
{
	let third_num = (num3 ? num3 : 1);
	return num1 * num2 * third_num;
}
console.log("Multiplication: " + multiply(3, 4));


// Default Parameter
function subtract(num1: number, num2: number, num3: number = 0) : number
{
	return num1 - num2 - num3;
}
console.log("Substraction: " + subtract(9, 5));


// Rest Parameter
function add(...nums: number[]): number					// The type of resting variables should be specified
{
	let sum = 0;
	nums.forEach(num => {
		sum = sum + num;
	});
	return sum;
}
console.log("Addition: ", add(1, 2, 3, 4, 5));
let values = [6, 7, 8, 9];
console.log("Addition: ", add(...values));


// Tuple Parameters
// Function taking primitaive data type parameter and returning 'tuple'
function makePersonTuple(name: string, age: number): [string, number]
{
	return [name, age];
}

let p1 : [name: string, age: number];
p1 = makePersonTuple("Ram KC", 19);

console.log("Tuple Data from Function: " + p1);


// Generic Function
function display<T>(values: T[]) : void
{
	console.log("Generic Function Output: ");
	values.forEach(value => {
		console.log(value);
	});
}

display<number>([1, 2, 3, 4]);
display<string>(["Ram", "Shyam", "Hari"]);