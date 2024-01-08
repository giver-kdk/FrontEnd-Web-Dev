// Self calling function calls itself once after its definition in a program without the need of manually calling them.

/*
syntax:
	(function(parameters)
	{
		// statement
	})(arguments);	
*/ 

// Self Invoking Anonymous Function Definition
(function(user)
{
	console.log("Hello " + user);
	console.log("I am an anonymous function invoking myself");;
})("Giver");