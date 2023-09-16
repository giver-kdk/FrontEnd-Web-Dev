// Runs the callback function when document is loaded
$(document).ready(() =>
{
	/*
		***** jQuery Code *****
		We can use many events like: 
		For Mouse: click, dblclick, mouseenter, mouseleave, mousedown, mouseup, hover, 
		For Keyboard: keypress, keydown, keyup, 
		For Form: submit, change, focus, blur, 
		For Window/Document: load, resize, scroll, unload
	*/
	
	// ***** METHOD 1 *****
	$(".text1").click(() => {			// Adds event listener for click event
		alert("You clicked a text");
	});
	
	$(".text1").click();				// Actually simulates click action 
	
	// ***** METHOD 2 *****
	function handleClick()
	{
		alert("You clicked another text!");
	}
	$(".text2").click(handleClick);	
	
	// ***** METHOD 3 *****
	$(".text3").on("dblclick", () => {	
		// Using "on" like "addEventListener"
		alert("You double clicked a text!");
	});
	
	// ***** METHOD 4 *****
	$(".text3").on(
		{	
			// Add multiple event handlers by creating object 
			click: () => {
				alert("You clicked a text");
			},
			mouseleave: () => {
				alert("You left text paragraph");
			}
		}
	);
	
});