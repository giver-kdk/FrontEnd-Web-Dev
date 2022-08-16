/*
fetch() actaully returns a 'Promise'. Afer using 'await',
fetch() returns returns a 'Response' object from 'Promise' if 'resolve'
'Response' object has detail about the response like status, 
fetch() returns 'Error' object if 'reject' 

The response object can be converted into object using json() method and perform operations
Normailly, use try-catch-finally for error handling

*/

console.log("Fetching with easy async-await syntax");

async function myFunction()
{
	try
	{
		let response = await fetch("https://reqres.in/api/users?page=2");			// 1st get the 'Response'
		// console.log(response);
		let myObject = await response.json();										// Convert 'Response' into 'Object'(or Text or other)
		// console.log(myObject);
		let dataArray = myObject.data;												// Then extract data
		let data = dataArray[0];
	
	
		element = document.getElementById("content");
		// console.log(data);
		element.innerHTML = data.email;
	}
	catch(err)																		// Control jumps here with 'Error' during failure
	{
		console.log(err);
	}

}

myFunction();