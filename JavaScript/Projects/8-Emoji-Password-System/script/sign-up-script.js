let register = document.getElementById("signup");
let headerSign = document.querySelector(".headerSign");
let accountAvailable = true;

function signup()
{
	let emailAllowed = mailInput.value.includes("@") && mailInput.value.length >= 8;
	let pwAllowed = pwInput.value.length >= 8;

	if(emailAllowed) mailErr.style.display = "none";
	else
	{
		mailErr.innerHTML = "Please enter a valid email";
		mailErr.style.display = "block";
	}

	if(pwAllowed) pwErr.style.display = "none";
	else
	{
		pwErr.innerHTML = "Please enter atleast 4 Emoji or 8 Characters";
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
				mailErr.innerHTML = "Sorry the mail is already in used"
				mailErr.style.display = "block";
				accountAvailable = false;
				break;
			}
			else
			{
				accountAvailable = true;
			}
		}
		if(accountAvailable)
		{
			localStorage.setItem("loggedIn", "true");
			console.log(playfair(pwInput.value));
			localStorage.setItem(mailInput.value, pwInput.value);
			headerSign.innerHTML = "CONGRATULATIONS!!! You are Registered...";
			logStatus.innerHTML = "Logged In";
			logStatus.classList.add("registered");
		}
	}
}
pwInput.addEventListener("keydown", block_key);
register.addEventListener("click", signup);


function logout_proceed()
{ 
	formBox.style.display = "flex";
	headerSign.innerHTML = "Enter details to create account";
	mailInput.value = "";
	pwInput.value = "";
}
logout.addEventListener("click", logout_proceed);
