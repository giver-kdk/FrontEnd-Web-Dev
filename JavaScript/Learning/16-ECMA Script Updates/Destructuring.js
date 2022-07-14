// Destructuring means extracting the values from array or objects. It doesn't affect original array/object

// Traditonal Method of getting array elements is hard for large array
let numbers = [2, 3, 4];
let a = numbers[0];
let b = numbers[1];
let c = numbers[2];
// Destructuring Array in Modern Way
console.log("Array Destructuring");
let myArray = [5, 6, 7, 8, 9];
// let [variable1, variable2, ...] = arrayName;
// let [variable1, variable2, ..., variable = value] = arrayName;
let [num1, num2, num3, num4, num5, num6 = 10] = myArray;
console.log(myArray);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);




// Traditonal Method of getting object values is hard for large objects
let car = 
{
	model: "Lambo",
	color: "Golden",
	fuel: "Premium"
}
let x = car.model;
let y = car.color;
let z = car.fuel;
// Destructuring Object in Modern Way
console.log("Object Destructuring Method 1");
let myObject = 
{
	myName: "Giver",
	age: 19,
	rollnum: 05,
	section: "A"
}
// let {property1: variable1, property2: variable2, ...} = objectName; 
// let {property1: variable1, property2: variable2, ..., variable = value} = objectName; 
let {myName: name1, age: age1, rollnum: roll1, section: section1, subject1 = "IOT"} = myObject;
console.log(name1);
console.log(age1);
console.log(roll1);
console.log(section1);
console.log(subject1);





console.log("Object Destructuring Method 2");
// let {property1, property2, ...} = objectName; 
// The property becomes the variable containing value
let {myName, age, rollnum, section} = myObject;
console.log(myName);
console.log(age);
console.log(rollnum);
console.log(section);
