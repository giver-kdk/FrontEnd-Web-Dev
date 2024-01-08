$(document).ready(() =>
{
	// Extract the element's style property value
	let styleValue = $(".text1").css("background-color");
	console.log(styleValue);

	// Assign single style property to an element
	$(".text2").css("background-color", "red");
	
	// Assign multiple style property to an element
	// Here, key should also be a string
	$(".text3").css({
		"background-color": "green",
		"color": "white",
		"width": "500px", 
		"height": "300px", 
		"border": "0px solid transparent",
		"border-radius": "7px",
		"padding": "1rem"
	});

});