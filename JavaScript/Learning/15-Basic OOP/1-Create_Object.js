// Object Literal is the 'key: value' pair data structure
// An object can store variables and methods

// Method 1 of creating object
let firstObject = 
{
	myName: "Giver Khadka",
	age: 19,
	// functionName: function(){...}
	display: function()
	{
		// Accessing data members from member function (objectName.data)
		console.log(`My name is ${firstObject.myName} and I am ${firstObject.age} years old`);
	}
}
// Method 2 of creating object (Simple)
let secondObject = 
{
	myName: "Smith Nepal",
	age: 20,
	// functionName(){...}
	show()
	{
		console.log(`My name is ${secondObject.myName} and I am ${secondObject.age} years old`);
	}
}

// Accesing object variable and methods using dot(.) operator
console.log(firstObject.myName);
firstObject.display();

console.log(secondObject.age);
secondObject.show();
// Accesing object variable using [] operator just like array
// There should be string inside []
console.log(firstObject["myName"]);
console.log(firstObject["age"]);

let variable = "myName";
console.log(secondObject[variable]);