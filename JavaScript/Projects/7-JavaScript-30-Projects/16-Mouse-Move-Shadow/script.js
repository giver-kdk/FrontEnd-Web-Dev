let surface = document.querySelector(".box");
let text = document.querySelector(".content");
// Here, limit = 50 means the shadow x and y value lies in range (-25, 25)
let limit = 50;

function animate(e)
{
	// Get height and width of surface div
	let width = surface.offsetWidth;
	let height = surface.offsetHeight;
	// Get x and y value of mouse pointer
	let x = e.offsetX;
	let y = e.offsetY;
	// Correct the x and y value when hovered over child element
	if(this != e.target)
	{
		x = x + text.offsetLeft;
		y = y + text.offsetTop;
	}
	// Convert the x and y value into ratio with respect to width and height
	// Then, convert that ratio into range given by `limit`
	let xMove = ((x / width) - (1 / 2)) * limit;
	let yMove = ((y / height) - (1 / 2)) * limit;
	// Apply converted values to x and y values to text-shadow style property
	text.style.textShadow = `${xMove}px ${yMove}px 10px grey`;

}

surface.addEventListener("mousemove", animate);