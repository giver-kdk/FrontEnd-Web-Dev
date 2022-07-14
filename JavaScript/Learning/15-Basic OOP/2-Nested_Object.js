// Object inside an object is nested object 
// 'key: value' principle is preserved while creating nested object

let outerObject = 
{
	myName: "Giver Khadka",
	age: 19,
	innerObject: 
	{
		rollNum: 05,
		program: "B.Sc.CSIT"
	}
}

// Accessing nested object members
console.log(outerObject.innerObject.program);