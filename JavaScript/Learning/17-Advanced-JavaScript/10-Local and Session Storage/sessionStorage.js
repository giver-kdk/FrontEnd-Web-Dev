// sessionStorage() stores data on browser temporarily. So, called 'session'
// All the stored data is cleared automatically by browser when tab/browser is closed
// The data is stored as 'key, value' pair 



console.log("Session Storage Part: ");
console.log("");



// Storing Data
sessionStorage.setItem("college", "NCIT");
sessionStorage.setItem("section", "A");			
sessionStorage.setItem("semester", "Second");			

// Accessing Data
console.log( sessionStorage["college"] );
console.log( sessionStorage.college );
console.log( sessionStorage.semester );

let data = sessionStorage.getItem("college");
console.log(data);
// Getting all Data at once
for(let i = 0; i < sessionStorage.length; i++)
{	// 'sessionStorage.key(i)' returns naem of 'ith' index key
	console.log(sessionStorage.getItem(sessionStorage.key(i)));
}

// Removing a Data
sessionStorage.removeItem("college");


// Clearing all data
sessionStorage.clear();
// We get 'undefined' after clearing data
console.log( sessionStorage.semester );
