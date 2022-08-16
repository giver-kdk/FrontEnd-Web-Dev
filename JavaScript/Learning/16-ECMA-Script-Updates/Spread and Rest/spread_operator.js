// spread operator (...) is used to distribute the data-pack(array/object) into individual data 

// Using spread operator with array
let array1 = [5, 6, 7, 8, 9];

// Here, '...array1' spreads 'array1' as array element of array3
let array2 = [5, 6, 7, 8, 9, 10, 11, 12];
let array3 = [...array1, 10, 11, 12];				// Change in 'array1' updates 'array2'
console.log(array2);
console.log(array3);


// Using spread operator with array as function argument
function sum(a, b, c, d)
{
	console.log("Sum of 4 numbers:");
	console.log(a + b + c + d);
}
// Notice 'array1' has 5 elements, but 'sum()' only takes 4 arguments. So, last element is ignored
sum(...array1);				// '...array1' spreads array elements as function arguments




// Using spread operator with object
let object1 = {myName: "Giver", age: 19, roll: 05};
let object2 = {myName: "Giver", age: 19, roll: 05, section: "A", id: 1234};
// Here, '...object1' spreads 'object1' as 'key: value' pair element of object3
let object3 = {...object1, section: "A", id: 1234};

console.log(object1);
console.log(object2);
console.log(object3);