function createCookies()
{
	// No path is specified. So, default path is the current document path
	document.cookie = "username = Giver";
	// Path is "/login". So, this cookie can only be access via "domain_name/login" 
	// NOTE: This cookie can also be accessed via "domain_name/login/page2/..."
	document.cookie = "password = 123; path = /JavaScript/Learning/17-Advanced-JavaScript/11-Cookie/03-Path/login.html";
	// Path is "/". So, this cookie can be accessed from anywhere of the website  
	// Eg: "domain_name/login", "domain_name/home", "domain_name/about", etc.
	document.cookie = "age = 21; expires = Sun, 01 Jan 9999 01:00:00 GMT; path = /";
	alert("Cookies has been created");
}
function readCookies()
{
	let allCookies = document.cookie;
	console.log(allCookies);
	let cookieArray = allCookies.split("; ");
	console.log(cookieArray);
	for(let i = 0; i < cookieArray.length; i++)
	{
		let key = cookieArray[i].split("=")[0]; 			
		let value = cookieArray[i].split("=")[1]; 
		console.log(`Key is ${key} and value is ${value}`);
	}
}
function deleteCookies()
{
	// "username" cookie uses default path. So, no need to mention path for deletion 
	document.cookie = "username =; expires = Sun, 01 Jan 2000 01:00:00 GMT";
	// Need to specify the exact path where the cookie belogns to for its deletion
	document.cookie = "password =; expires = Sun, 01 Jan 2000 01:00:00 GMT; path = /JavaScript/Learning/17-Advanced-JavaScript/11-Cookie/03-Path/login.html";
	// "age" cookie uses root directory path. So, need to mention path for deletion 
	document.cookie = "age =; expires = Sun, 01 Jan 2000 01:00:00 GMT; path = /";
	console.log(`Cookie after deletion:`);
	readCookies();
	alert("Cookies has been deleted");
}