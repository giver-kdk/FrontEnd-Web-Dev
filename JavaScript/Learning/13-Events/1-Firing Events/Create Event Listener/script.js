let element = document.getElementById("btn");

function showMessage()
{
	alert("You clicked the button!!!");
}
function showFeedback()
{
	alert("Keep Clicking Aye!!!");
}


// 'addEventListener(event, functionName, boolean)'
// Here, 'boolean' argument is optional. It sets bubble(false) and capture(true or useCapture) order.
// We can write function name as well as anonymous function using 'addEventListener()'
// Here, both similar event(click) firing are done turn by turn unlike 'element.event'
element.addEventListener("click", showMessage);
element.addEventListener("click", showFeedback);