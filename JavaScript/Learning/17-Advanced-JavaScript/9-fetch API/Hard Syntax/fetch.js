/*
	fetch() returns a promise after getting reponse from server
	That promise can be used to extract data and handle error
*/


console.log("Fetching with hard syntax");

fetch("https://reqres.in/api/users?page=2")
.then((response) => {						// 1st we get the 'Response' object containing info about the response
	promiseRes = response.json();			// Convert response into Promise
	console.log(promiseRes);
	return promiseRes;						
})
.then((myObject) => {						// We get 'Object' if promise 'resolve'
	console.log(myObject);
	dataArray = myObject.data;
	return (dataArray[0]);
})
.then((data) => {
	let element = document.getElementById("content");
	element.innerHTML = data.email;
	console.log(data.email);
})	
.catch((err) => {							// We get 'Error' if promise 'reject'
	console.log(err);
});
