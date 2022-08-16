// reduce() works from left-to-right. So, accumulator = first element at starting
// But, reduceRight() works from right-to-left. So, accumulator = last element at starting
let result;
let numbers = [5, 6, 7, 8, 9];
let numbers2 = [5, 6, 7, 8, 9];
function sum(accumulator, element, index, array)
{
	debugger;
	accumulator = accumulator + element;			
	return accumulator;
}
result = numbers.reduce(sum);					// At start, accumulator  = 5
console.log(result);
result = numbers.reduceRight(sum);				// At start, accumulator  = 9
console.log(result);
// Here, 10 is added to remaining array elements
result = numbers.reduceRight(sum, 10);				// At start, accumulator  = 10
console.log(result);