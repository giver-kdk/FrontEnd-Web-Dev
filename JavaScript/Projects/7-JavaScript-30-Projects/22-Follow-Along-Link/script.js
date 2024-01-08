let links = document.querySelectorAll("a");
// Create the highlighting element that travels through links
let follower = document.createElement("span");
// Initially, put the "highlighter" with "home"
document.body.append(follower);
let home = document.getElementById('home');
follower.classList.add("highlight");
follower.style.width = `${home.offsetWidth}px`;
follower.style.height = `${home.offsetHeight}px`;
follower.style.transform = `translate(${home.offsetLeft - 10}px, ${home.offsetTop - 10}px)`;

// Adjust highlighter's dimension and position with respect to hovered element
function animate_highlight(e)
{
	let coords = {
		width: this.offsetWidth,
		height: this.offsetHeight,
		left: this.offsetLeft - 10,
		top: this.offsetTop - 10
	}
	follower.style.width = `${coords.width}px`;
	follower.style.height = `${coords.height}px`;
	follower.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

links.forEach(link =>
	{
		link.addEventListener("mouseover", animate_highlight);
	});