// 'this' object specifies current scope object
// 'this' refers to object based upon where it is placed/used
// 'this' can access all methods, properties and features of the object which is specified by it

// Using 'this' object on global scope
// 'this' is on global scope. So, it refers to global 'window' object. i.e; this = window
// Hence, 'this' can access all 'window' object features like alert, prompt and more 
console.log(this);						// Shows window object as output on browser console


// 'this' object will refer to 'window' object even when using it inside a function 
function display()
{
	console.log(this);
	this.alert("Hi there...You are learning 'this' object in JavaScript");

}
display();

// Using 'this' object inside an object 
// Here, 'this' refers the to the object from where it is used. i.e; this = object1
let object1 = 
{
	myName: "Giver Khadka",
	age: 19,
	print()
	{
		console.log(`My name is ${object1.myName} and I am ${object1.age} years old`);
	},
	show()
	{
		console.log(this);
		console.log(`My name is ${this.myName} and I am ${this.age} years old`);
	}
}
object1.print();
object1.show();

// We know using 'this' inside an object with normal function would mean this = objectName
// But, using 'this' inside an object with arrow function would mean this = window
// Arrow function is not related to OOP. So, it doesn't support 'this' object 

let object2 = 
{
	myName: "Smith Nepal",
	age: 20,
	arrowFunction: () =>
	{
		console.log(this);
		// We can't use the 'object2' features
		// console.log(`My name is ${this.myName} and I am ${this.age} years old`);
		// We can use the 'window' features
		this.alert("Hello I am being called from arrow function of object");
	}
}
object2.arrowFunction();

