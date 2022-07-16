/*
AJAX(Asynchronous JavaScript And XML) XMLHttpRequest sends request to server for data
Recieves data in the form of normal text or JSON text

Synatx:

	// Create object
	variable = new XMLHttpRequest();

	// Send request for data
	variable.open(method, url, async)
	variable.send();

	// Run a function after getting response('load' event) 
	variable.onload = function()
	{
		data = this.responseText;
	}

*/

const myResponse = new XMLHttpRequest();

myResponse.open('GET', "https://reqres.in/api/users?page=2");
myResponse.send();

// When response is ready, run a callback function
myResponse.onload = function ()
{
	let myJSON = this.responseText;					// This is actual response in JSON format
	// Displays status of response
	// Can be used for error handling
	console.log(myResponse.status);					// 200 = "OK", 403 = "Forbidden" and 404 = "Page Not Found"					

	console.log(myJSON);							// Display in console to verify what type of data it is
	let myObj = JSON.parse(myJSON);
	console.log(myObj);								// Again, display in console to see data structure
	let dataArray = myObj.data;				
	let data = dataArray[0];						// Access specific data accordingly

	element = document.getElementById("content");
	element.innerHTML = data.email;					// Display recieved data in DOM
	console.log(data.email);
};