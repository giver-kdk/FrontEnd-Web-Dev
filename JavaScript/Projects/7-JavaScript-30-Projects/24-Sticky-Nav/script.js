let navbar = document.querySelector("#main");
// This value needs to be global
let navTop = navbar.offsetTop;




function fix_nav()
{
	let navHeight = navbar.offsetHeight;
	if(window.scrollY >= navTop)
	{
		// Directly add the class to the body instead of "navbar"
		// This allows to edit other element styles as well
		document.body.classList.add("fixed__nav");
		// Adding sudden padding avoids jittery shift of body element 
		document.body.style.paddingTop = `${navHeight}px`;
	}
	else
	{
		document.body.classList.remove("fixed__nav");
		document.body.style.paddingTop = `0px`;
	}
}

window.addEventListener("scroll", fix_nav);