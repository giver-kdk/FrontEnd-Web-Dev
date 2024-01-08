$(document).ready(() =>
{
	// Imaging slide function as face mask. If mask up, then face is hidden and if mask down then face is shown
	$(".text1").slideUp();				// Makes element disappear from down to up 
	$(".text2").slideUp(1000);			// Makes element dissappear within 1000 miliseconds
	$(".text3").slideUp(1000, () =>
	{
		console.log("Slide Up Complete!");
	});									// Runs callback function after sliding up
	
	$(".text1").slideDown();			// Makes element appear from up to down 
	$(".text2").slideDown(1000);		// Makes element appear within 1000 milliseconds
	$(".text3").slideDown(1000, () =>
	{
		console.log("Slide Down Complete!");
	});									// Runs callback function after slidign down 

	$(".toggle__btn").on("click", () =>
	{
		$(".text1").slideToggle();		// Slides up if slided down and vice versa
		$(".text2").slideToggle(1000);	// Toggles slide within 1000 milliseconds
	});
	
});