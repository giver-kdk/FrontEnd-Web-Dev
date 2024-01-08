$(document).ready(() =>
{
	// ***** NOTE: Hide actually reduces element scale to 0 ***** 

	let textElem = $(".text1")
	textElem.hide();			// Instantly hides the element
	$(".text2").hide(500);		// Hides element within 500 milliseconds

	$(".text3").hide(500, () => {
		console.log("Hiding Complete");
	});		// Runs the callback function after hiding
	
	function handleClick()
	{
		// Hides element if shown and shows if hidden
		textElem.toggle();
	}
	$(".toggle__btn").on("click", handleClick);
	
	$(".text1").show();			// Instantly shows the element
	$(".text2").show(500);		// Shows element within 500 millisecodns
	$(".text3").show(500, () =>
	{
		console.log("Showcase Done!");
	});		// Runs callback function after showing
});