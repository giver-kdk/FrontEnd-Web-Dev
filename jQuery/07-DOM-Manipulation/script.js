$(document).ready(() =>
{
	// ***** Get inner text of an element *****
	let string = $(".text1").text();
	console.log(string);
	
	// ***** Get inner HTML of an element *****
	let structure = $(".parent").html();
	console.log(structure);
	
	// ***** Get value of an input element or text area *****
	let value = $(".input__box").val();
	console.log(value);




	// ***** Set inner text of an element *****
	$(".text1").text("This is updated text 1");
	
	// ***** Set inner HTML of an element *****
	$(".parent").html("<p>I am an updated Child</p>");
	
	// ***** Set value of an input element or text area *****
	$(".input__box").val("Smith Nepal");




	// ***** Add specified class on selected element *****
	$(".add__class").on("click", () =>
	{
		$(".parent").addClass("stylish");
	})
	// ***** Remove specified class from selected element *****
	$(".remove__class").on("click", () =>
	{
		$(".parent").removeClass("stylish");
	})
	// ***** Add class if element doesn't have specified class and remove if already has *****
	$(".toggle__class").on("click", () =>
	{
		$(".parent").toggleClass("stylish");
	})
	
	
	
	
	// ***** Erase text content of element. But, can't erase input box value *****
	$(".erase__text").on("click", () =>
	{
		$(".text1").empty();
	})
	// ***** Deletes the actual element from the DOM *****
	$(".delete__elem").on("click", () =>
	{
		$(".text2").remove();
	})
});