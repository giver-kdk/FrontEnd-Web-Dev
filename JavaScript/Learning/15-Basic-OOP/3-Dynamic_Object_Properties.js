
// We know the values of an object can be a variable
let person = "Giver";

let object1 = 
{
	myName: person,
	age: 19,
	roll: 05
}
console.log(object1);

// Now, even the properties(keys) can be a variable using []
let vehicle = "Car";

let object2 = 
{
	[vehicle]: "Lamborgini",
	age: 19,
	roll: 05
}
console.log(object2);

// Hence, both key and value can be variable
let employee = "Manager";
let individual = "Ram";

let object3 = 
{
	[employee]: individual,
	age: 30,
	id: 1234
}
console.log(object3);
// Accessing object values with dynamic property variable
console.log(object3[employee]);
console.log(object3["age"]);
console.log(object3["id"]);

// Adding property and value in object 
object3["salary"] = 80000;
console.log(object3);

// Adding property and value using variables
let variable = "Gender";
let gender = "Male";
object3[variable] = gender;
console.log(object3);



