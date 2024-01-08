$(document).ready(() =>
{
	// SYNTAX: animate(property, duration, callback)

	// Default jQuery doesn't support animation of string(only numerical) value proeprty 
	// So, "backgroundColor", "color" can't be animated here

	// ***** The element animates from initial state to specified final state fast *****
	$(".text1").animate({
		width: "200px",
		height: "200px",
		fontSize: "32px"
	});
	// ***** Runs animation within 1000 milliseconds *****
	$(".text2").animate({
		width: "200px",
		height: "200px",
		fontSize: "32px"
	}, 1000);
	// ***** Duration can be "slow" and "fast" *****
	$(".text3").animate({
		width: "200px",
		height: "200px",
		fontSize: "32px"
	}, "slow", () =>
	{
		// Callback function runs after animation finishes 
		console.log("Animation Complete!");
	});

	$(".stop__btn").on("click", () =>
	{
		// Instantly stops animation in the middle
		$(".text1").stop();			
		$(".text2").stop();			
		$(".text3").stop();
	});
});