$(document).ready(() =>
{
	// ***** NOTE: "fadeOut" actually reduces element opacity and instantly reduces scale to 0 ***** 
	
	$(".text1").fadeOut();			// Sets opacity to 0 smoothly		
	$(".text2").fadeOut(1000);		// Sets opacity to 0 within 1000 milliseconds		
	$(".text3").fadeOut(1000, () =>
	{
		console.log("FadeOut Complete!");
	});	// Runs callback function after fading out		
	
	$(".text1").fadeIn();			// Sets opacity to 1 smoothly
	$(".text2").fadeIn(1000);		// Sets opacity to 1 within 1000 milliseconds
	$(".text2").fadeIn(1000, () =>
	{
		console.log("Fade In Complete!");
	});	// Runs callback function after fading in
	
	// ***** NOTE: "fadeTo" doesn't reduce scale to 0 ***** 
	// ***** NOTE: "fadeTo" doesn't run in a queue like "fadeIn" and "fadeOut" ***** 
	$(".text4").fadeTo(0, 1);		// Sets opacity to specified value smoothly and instantly 
	$(".text4").fadeTo(1000, 0);	// Sets opacity to specified value within 1000 milisseconds
	$(".text5").fadeTo(1000, 0.5, () =>
	{
		console.log("Opacity set to 50%!");
	});	// Runs callback function after setting opacity

	$(".toggle__btn").on("click", () =>
	{
		$(".text1").fadeToggle();	// Sets opacity to 0 if 1 and vice versa
	});
});