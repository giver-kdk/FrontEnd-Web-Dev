// Basic HTML elements like head, body, footer, etc can be accessed directly 
// using DOM (Document Object Model)
/*
	Syntax:
		variable = document.elementName;
*/
// Accessing entire 'html' element
let root = document.documentElement;
console.log(root);
console.log(typeof(root));		// HTML elements is an object

// Accessing 'head' element
let heading = document.head;
console.log(heading);
//  Accessing all inner HTML of 'head' section as String
console.log(heading.innerHTML);

// Accessing 'body' element
let bodySection = document.body;
console.log(bodySection);
//  Accessing all inner HTML of 'body' section as String
 console.log(bodySection.innerHTML);
 