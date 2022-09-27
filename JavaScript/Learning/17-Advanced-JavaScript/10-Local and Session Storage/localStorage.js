// localStorage() stores data on local memory permanently until user deletes it manually
// The stores data can be accessed even when user closes the tab/browser
// The data is stored as 'key, value' pair 


console.log("Local Storage Part: ");
console.log("");



// Storing Data
// localStorage.setItem("key", "value");
localStorage.setItem("name", "Giver");
localStorage.setItem("age", 19);			
localStorage.setItem("roll", 05);			

// Accessing Data
console.log( localStorage["name"] );	// Use 'key' to acces 'value'
console.log( localStorage.name );
console.log( localStorage.age );

let value = localStorage.getItem("name");
console.log(value);
// Getting all data at once
for(let i = 0; i < localStorage.length; i++)
{	// 'localStorage.key(i)' returns name of 'ith' index 'key'
	console.log(localStorage.getItem(localStorage.key(i)));
}

// Removing a element
localStorage.removeItem("name");			// Use 'key' to delete both 'key, value' pair


// Clearing all data
localStorage.clear();
// We get 'undefined' after clearing value
console.log( localStorage.age );
