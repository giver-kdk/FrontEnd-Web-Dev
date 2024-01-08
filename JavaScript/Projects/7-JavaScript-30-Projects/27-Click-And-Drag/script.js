let gallery = document.querySelector(".gallery");
let select = false;
let startPoint;
let currentScroll;

function handle_mousedown(e)
{
	e.preventDefault();
	select = true;
	startPoint = e.clientX;
	currentScroll = gallery.scrollLeft;
	gallery.classList.add("select");
	console.log("Mouse Down: ", startPoint);
	console.log("Mouse Down: ", gallery);
}
function handle_mousemove(e)
{

	let walk = startPoint - e.clientX;
	if(select)
	{
		console.log("Mouse Move");
		gallery.scrollLeft = currentScroll + walk;
	}
}
function handle_mouseup()
{
	select = false;
	gallery.classList.remove("select");
	console.log("Mouse Up");
}
function handle_mouseleave()
{
	select = false;
	gallery.classList.remove("select");
	console.log("Mouse Leave");
}

gallery.addEventListener("mousedown", handle_mousedown);
gallery.addEventListener("mouseup", handle_mouseup);
gallery.addEventListener("mousemove", handle_mousemove);
gallery.addEventListener("mouseleave", handle_mouseleave);