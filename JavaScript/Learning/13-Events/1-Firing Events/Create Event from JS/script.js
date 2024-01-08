let element = document.getElementById('btn');

// element.onclick = functionName;			// This method of calling function may run JS before DOM loads causing bug 
// It is recommended to use anonymous function with 'element.event'
element.onclick = function()
{
	alert("Yo...You clicked the button!");
};
// Here, above similar event(onclick) firing is overwritten by this event fire (Bottom overwritres top)
element.onclick = showMessage;

function showMessage(eventObject)
{
	console.log(eventObject.type)
	alert("Yo...You clicked the button! CONGRATULATION...SUCCESSFUL PERSON...");
}
