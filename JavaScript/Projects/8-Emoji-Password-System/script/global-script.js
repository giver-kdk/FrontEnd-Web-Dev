// Using Emoji in JavaScript
// e.innerHTML = `${String.fromCodePoint(0x1F600)}Hello`;
let mailInput = document.getElementById("email");
let pwInput = document.getElementById("password");
let pwErr = document.querySelector(".pw__error");
let mailErr = document.querySelector(".mail__error");
let logStatus = document.querySelector(".status");
let formBox = document.querySelector(".container");
let logout = document.querySelector(".logout");

if(localStorage.getItem("loggedIn") == "true")
{
	logStatus.innerHTML = "Logged In";
	logStatus.classList.add("registered");
}

function block_key(e)
{
	// console.log(e.keyCode);
	let allowedKey = e.keyCode == 8 || e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40 || e.keyCode == 46;
	// if(allowedKey)
	// {
	// 	pwErr.style.display = "none";
	// }
	// else
	// {
	// 	// Stops the input of the key on field
	// 	e.preventDefault();
	// 	pwErr.innerHTML = "Please enter only Emoji";
	// 	pwErr.style.display = "block";
	// }
}
function logout_proceed()
{ 
	localStorage.setItem("loggedIn", "false");
	logStatus.innerHTML = "Not Logged In";
	logStatus.classList.remove("registered");
}
logout.addEventListener("click", logout_proceed);


// // Clearing all data
// localStorage.clear();