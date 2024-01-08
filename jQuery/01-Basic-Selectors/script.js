// Equivalent to getElementByID("text2") in JS, but for jQuery
let elem0 = $(document);			// Entire document selector
let elem1 = $('#text1');			// ID selector
let elem2 = $('.text2');			// Class Selector
let elem3 = $('p');					// Element selector 
let elem4 = $('p, div');			// Multiple Element selector like in CSS 
let elem5 = $('p.first');			// Selects paragraph with "first" class 
let elem6 = $("*");					// Selects all elements
// Now, we can use jQuery methods on selected elements

console.log(elem0);
console.log(elem1);
console.log(elem2);
console.log(elem3);
console.log(elem4);
console.log(elem5);
console.log(elem6);