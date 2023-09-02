// Cookie setter funciton to be used in a generalized way
function setCookie(key, value, daysToLive)
{
	// Calculate expiry date by adding daysToLive(in Millisseconds) with current date
	let expiryDate = Date.now() + daysToLive * 24 * 60 * 60 * 60 * 1000;
	// Refer a Date object and convert it into UTC format
	let date = new Date(expiryDate).toUTCString();
	document.cookie = `${key} = ${value}; expires = ${date}`;
}
function createCookies()
{
	let key = "username";
	let value = "Giver Khadka";
	let daysToLive = 5;			// Lifespan of a cookie

	setCookie(key, value, daysToLive);
	alert("Cookies has been created");
}
function readCookies()
{
	let allCookies = document.cookie;
	let cookieArray = allCookies.split("; ");

	for(let i = 0; i < cookieArray.length; i++)
	{
		let key = cookieArray[i].split("=")[0]; 			
		let value = cookieArray[i].split("=")[1]; 
		console.log(`Key is ${key} and value is ${value}`);
	}
}
function deleteCookies()
{
	let key = "username";			// Need to mention cookie name
	let value = "";					// No value needed for deletion
	let daysToLive = 0;				// Instantly expire the cookie
	// Can use path if cookie is stored in a particular path 
	// But, need to modify "setCookie()" function accordingly
	// let path = "/abc"				

	setCookie(key, value, daysToLive)
	alert("Cookies has been deleted");
}