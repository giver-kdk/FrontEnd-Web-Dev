// Similar to C++, 'try' statement run a code and 'catch' statement catches error of error occurred
// 'finally' statement run anyway independently(Either error occurs or not) 
// NOTE: 'try', 'catch' and 'finally' should be written serially one after another without interrrupt

function execute()
{
	try 
	{
		console.log("Entering try scope...");
		garbageVariable;										// Control flows to 'catch' when error detected
		console.log("Succesfully executed try statement");		// Doesnt' run due to above error
	}
	catch(error)
	{
		console.log("!!!We got an error here!!!");
		console.log("ERROR: ", error);			// Actually prints exact 'error' detected by JS
	}
	finally
	{
		console.log("Work ended though!")			// Runs anyway
	}
	console.log("We are at the end of function");
}

execute();