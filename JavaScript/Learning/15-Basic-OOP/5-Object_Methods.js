// There is a predefined object called 'Object' in JS with useful methods

// Object.values() extracts all the values of an object and return an array of those values
/*
Syntax:
	newArray = Object.values(objectName);
*/

let object1 = 
{
	myName: "Giver",
	age: 19,
	roll: 05
}
let myValues = Object.values(object1);
console.log(myValues);




// Object.entries() extracts both keys and values of an object and return an 2D array of those key-value pairs
/*
Syntax:
	newArray = Object.entries(objectName);
*/

let myData = Object.entries(object1);
console.log(myData);



// Object.fromEntries() is reverse of Object.entries()
// It converts the 2D key-value pair Array into an Object
/*
Syntax:
	newArray = Object.entries(objectName);
*/

let newObject = Object.fromEntries(myData);
console.log(newObject);

