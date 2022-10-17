// Login Page Logic
let login = document.getElementById("login");
let headerLogin = document.querySelector(".headerLogin");

if(localStorage.getItem("loggedIn") == "true")
{
	document.querySelector("h2").innerHTML = "You are Logged In Now...";
	formBox.style.display = "none";
}

function login_proceed()
{
	let emailAllowed = mailInput.value.includes("@") && mailInput.value.length >= 8;
	let pwAllowed = pwInput.value.length >= 4;
	let mailFound = false;

	if(emailAllowed) mailErr.style.display = "none";
	else
	{
		mailErr.innerHTML = "Please enter a valid email";
		mailErr.style.display = "block";
	}
	
	if(pwAllowed) pwErr.style.display = "none";
	else
	{
		pwErr.innerHTML = "Please enter atleast 4 Emoji";
		pwErr.style.display = "block";
	}
	
	if(emailAllowed && pwAllowed)
	{
		mailErr.style.display = "none";
		pwErr.style.display = "none";
		
		for(let i = 0; i < localStorage.length; i++)
		{
			if(localStorage.key(i) == mailInput.value)
			{
				mailFound = true;
				if(localStorage.getItem(localStorage.key(i)) == pwInput.value)
				{
					localStorage.setItem("loggedIn", "true");
					headerLogin.innerHTML = "You are Logged In Now...";
					logStatus.innerHTML = "Logged In";
					logStatus.classList.add("registered");
					formBox.style.display = "none";
				}
				else
				{
					pwErr.innerHTML = "Sorry the password is incorrect!";
					pwErr.style.display = "block";
				}
			}
		}
		if(!mailFound)
		{
			mailErr.innerHTML = "Email you entered is not registered";
			mailErr.style.display = "block";
		}
	}
}
login.addEventListener("click", login_proceed);

function logout_proceed()
{ 
	formBox.style.display = "flex";
	headerLogin.innerHTML = "Enter details to log in";
	mailInput.value = "";
	pwInput.value = "";
}
logout.addEventListener("click", logout_proceed);
