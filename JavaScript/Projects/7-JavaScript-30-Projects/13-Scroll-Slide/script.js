
let images = document.querySelectorAll("img");

function slide_in(e)
{
	images.forEach((image) =>
	{
		// Boolean condition for image being half-visible from bottom
		let reachedCenter = (image.offsetTop - window.scrollY) <= (window.innerHeight - (image.height / 2));
		// Condition for image to leave viewport by going above screen
		let isAboveScreen = (image.offsetTop + image.height) <= window.scrollY;
		// If image is just-half shown, enable slide until it's within viewport
		if(reachedCenter && !isAboveScreen)
		image.classList.add("slide__active");
		// Else if image is out of viewport, disable slide until it's outside viewport
		else
		image.classList.remove("slide__active");
	});
}


window.addEventListener("scroll", slide_in);


// Test Variables
// let images = document.querySelectorAll("img");

// function slide_in(e)
// {
// 	console.log("Info Start: ");
// 	console.log(window.innerHeight);
// 	console.log(window.innerWidth);
// 	console.log(window.scrollY);;
// 	console.log(images[0].offsetTop);
// 	console.log(images[0].height);
// 	console.log("Info End: ");
// }
// window.addEventListener("scroll", slide_in);