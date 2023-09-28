// JSON (JavaScript Object Notation) is a string format of an 'Object' 
// Used to store, and transfer data between servers
// Difference between 'Object' and JSON: Double quote "" required for 'key' in JSON but not in 'Object'

// Object to JSON string conversion
let myObject1 = 
{
	myName: "Giver Khadka",
	age: 19,
	roll: 5,
	section: "A"
}

let myJSON1 = JSON.stringify(myObject1);			// 'stringify()' converts object into JSON string
console.log(myJSON1);
// Actual JSON contains key as string and looks like: 
let json = 
{
	"myName": "Giver Khadka",
	"age": 19,
	"roll": 5,
	"section": "A"
}

// JSON string to 'Object' conversion
let myObject2 = JSON.parse(myJSON1);
console.log(myObject2);
