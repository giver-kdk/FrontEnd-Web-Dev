let headerHome = document.querySelector(".headerHome");

function logout_proceed()
{ 
	headerHome.innerHTML = "Welcome to Emoji World &#x1F600";
}
logout.addEventListener("click", logout_proceed);