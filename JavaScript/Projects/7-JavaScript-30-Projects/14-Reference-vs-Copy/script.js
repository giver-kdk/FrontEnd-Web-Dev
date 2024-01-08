// Just a simple copying of Number variable 
let num1 = 20;
let num2 = num1;
console.log(num1 + " " + num2);
// The update in num1 won't affect num2
num1 = 50;
console.log(num1 + " " + num2);



// When assignment is done between array, then its "referencing"
let array1 = [1, 2, 3, 4, 5];
let array2 = array1;
console.log(array1);
console.log(array2);
// The update in array1 updates the array2
array1[0] = 30;
console.log();
console.log(array1);
console.log(array2);



// To make a copy of array using Spread method
let array3 = [1, 2, 3, 4, 5];
let array4 = [...array3];
array3[0] = 50;
console.log();
console.log(array3);
console.log(array4);



// To make copy of array using "Array" object
let array5 = [1, 2, 3, 4, 5];
let array6 = Array.from(array5);
array5[0] = 100;
console.log();
console.log(array5);
console.log(array6);



// To make copy of array using "slice()" method
let array7 = [1, 2, 3, 4, 5];
let array8 = array7.slice();
array7[0] = 20;
console.log();
console.log(array7);
console.log(array8);



// To make copy of array using "concat()" method
let array9 = [1, 2, 3, 4, 5];
let array10 = [].concat(array9);
array7[0] = 30;
console.log();
console.log(array7);
console.log(array8);



// When object is assigned, then its "referencing"
let object1 = 
{
	name: "Ram",
	age: 12
};
let object2 = object1;
// When "object1" is updated, "object2" is also updated
object1.age = 19;
console.log();
console.log(object1);
console.log(object2);



// To copy object, using "assign()" method
let object3 = 
{
	name: "Ram",
	age: 12
};
let object4 = Object.assign({}, object3);
object3.age = 22;
console.log();
console.log(object3);
console.log(object4);



// To copy object, using "spread" method
// Only copies 1st outer layer, lower deep layer(object inside object) remains referenced
let object5 = 
{
	name: "Ram",
	age: 12
};
let object6 = {...object5};
object5.age = 32;
console.log();
console.log(object5);
console.log(object6);



// To copy object, using "JSON" object
// Copies upto all layers, but not recommended
let object7 = 
{
	name: "Ram",
	age: 12
};
// 1st convert object into string and then convert into object again
let object8 = JSON.parse(JSON.stringify(object7));
object7.age = 32;
console.log();
console.log(object7);
console.log(object8);


