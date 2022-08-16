// Since, 'callback' means using function inside another function for sequencial execution
// So, when long sequence of execution is required, the nesting structure becomes hard to manage
// Since, its a hell of nested function. So, it called: 'callback hell'


function display(value)
{
	console.log("My value is: ", value);
}

// Here, above asynchronous function allows below function to execute when its on hold
// So, both of them end up holding on at the same time and give result at same time
setTimeout(display, 1000, 1);
setTimeout(display, 1000, 2);


// If we want to execute one function after another, then we need to nest functions(callback)
setTimeout(() => {
	display(3);
	setTimeout(() => {
		display(4);
		setTimeout(() => {
			display(5);
		}, 2000);
	}, 2000);
}, 2000);
// These, pyramid structure is 'callback hell' which is fragile and hard to read 
