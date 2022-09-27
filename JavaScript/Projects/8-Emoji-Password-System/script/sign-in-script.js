// Using Emoji in JavaScript
// e.innerHTML = `${String.fromCodePoint(0x1F600)}Hello`;
let mailInput = document.getElementById("email");
let pwInput = document.getElementById("password");
let pwErr = document.querySelector(".pw__error");
let mailErr = document.querySelector(".mail__error");
let register = document.getElementById("signin");
let logStatus = document.querySelector(".status");

function block_key(e)
{
	// console.log(e.keyCode);
	let allowedKey = e.keyCode == 8 || e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40 || e.keyCode == 46;
	if(allowedKey)
	{
		pwErr.style.display = "none";
	}
	else
	{
		// Stops the input of the key on field
		e.preventDefault();
		pwErr.style.display = "block";
	}
}
function signin()
{
	let emailAllowed = mailInput.value.includes("@") && mailInput.value.length >= 8;
	let pwAllowed = pwInput.value.length >= 4;

	if(emailAllowed) mailErr.style.display = "none";
	else mailErr.style.display = "block";

	if(pwAllowed) pwErr.style.display = "none";
	else pwErr.style.display = "block";

	if(emailAllowed && pwAllowed)
	{
		mailErr.style.display = "none";
		pwErr.style.display = "none";

		localStorage.setItem(mailInput.value, pwInput.value);

		document.querySelector("h2").innerHTML = "CONGRATULATIONS!!! You are Registered...";
		logStatus.innerHTML = "Logged In";
		logStatus.classList.add("registered");
	}
}
pwInput.addEventListener("keydown", block_key);
register.addEventListener("click", signin);















// // Storing Data
// // localStorage.setItem("key", "value");
// localStorage.setItem("name", "Giver");
// localStorage.setItem("age", 19);			
// localStorage.setItem("roll", 05);			

// // Accessing Data
// console.log( localStorage["name"] );	// Use 'key' to acces 'value'
// console.log( localStorage.name );
// console.log( localStorage.age );

// let value = localStorage.getItem("name");
// console.log(value);
// // Getting all data at once
// for(let i = 0; i < localStorage.length; i++)
// {	// 'localStorage.key(i)' returns name of 'ith' index 'key'
// 	console.log(localStorage.getItem(localStorage.key(i)));
// }

// // Removing a element
// localStorage.removeItem("name");			// Use 'key' to delete both 'key, value' pair


// // Clearing all data
// localStorage.clear();
// // We get 'undefined' after clearing value
// console.log( localStorage.age );
