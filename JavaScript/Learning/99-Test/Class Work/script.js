var fname = document.getElementById("fname");
var submit = document.getElementById("sub");
console.log(fname);

// var fullName = jQuery("#fname");
// console.log(fullName);


fname.addEventListener("click", function()
{
	console.log("Clicked!");
});

fname.addEventListener("focus", function()
{
	console.log("Focused!");
});
fname.addEventListener("keyup", function()
{
	console.log("Key left Up!");
	if(fname.value.length < 5)
	{
		fname.nextElementSibling.innerHTML = "Value must be more than 4 characters";
	}
	else
	{
		fname.nextElementSibling.innerHTML = "";
	}
});