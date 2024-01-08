let element1 = document.getElementById("btn1");
let element2 = document.getElementById("btn2");

element1.addEventListener("mousedown", set_red);
element1.addEventListener("mouseup", set_green);

element2.addEventListener("mouseover", set_blue);
element2.addEventListener("mouseleave", set_orange);

function set_red()
{
	element1.style.backgroundColor = "red";
}
function set_green()
{
	element1.style.backgroundColor = "green";
}
function set_blue()
{
	element2.style.backgroundColor = "blue";
}
function set_orange()
{
	element2.style.backgroundColor = "orange";
}