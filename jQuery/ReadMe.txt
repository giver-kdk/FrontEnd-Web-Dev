********** jQuery **********
- jQuery is a "write less, do more" JavaScript Library
- It simplifies JS code for: 
	- Animation
	- DOM Manipulation 

- To use jQuery: 
	1. Download and link production jQuery JS file in HTML code form: https://jquery.com/download/ 
	2. Link this CDN by Google Hosted Library in HTML code to use jQuery: 
    	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script> 

- In jQuery, '$' literally means 'jQuery'

- SYNTAX: 
	// Simulate the event
	$('selector').action();								

	// Act as event listener where 'callback' is event handler
	$('selector').action(callback);				

	// Run callback function after action completes 			
	$('selector').action(duration, callback);				
	
	// For animate, properties is an object of final state 			
	$('selector').animate(properties, duration, callback);

- Execution Flow: 
	- Two functions always run one after another in jQuery. Eg: 
		1 - elem.hide(1000);
		2 - elem.show(1000);
		// Here, line-2 code will run just after line-1 finishes 
		// This is different from setTimeout in JS
