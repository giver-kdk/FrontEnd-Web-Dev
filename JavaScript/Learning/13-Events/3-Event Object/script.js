let element1 = document.getElementById("btn1");
let element2 = document.getElementById("btn2");

function showInfo()
{
	// 'event' is a pre-defined window object containing event info
	console.log(event);
	// Sub-info of the 'Event' object
	console.log(event.target);
	console.log(event.type);
	console.log(event.target.id);
}
element1.addEventListener("click", showInfo);





// 'event' object is deprecated. So, better to use event object which is automatically passed into 'addEventLister()'
// Here, the function parameter is the required 'event' object. This method is flexible
function showDetail(eventObject)
{
	// 'event' is a pre-defined window object containing event info
	console.log(eventObject);
	// Sub-info of the 'Event' object
	// HTML Element where the event listener was set
	// "eventObject.currentTarget" is equivalent to "this"
	console.log(eventObject.currentTarget);				
	// HTML Elementr that triggered the event
	console.log(eventObject.target);			
	console.log(eventObject.type);				// Type of event occurred
	// Return 'id' of element that fired the event
	console.log(eventObject.target.id);
}
// Here, 'showDetail' assumes the only parameter it can have is the event object
element2.addEventListener("click", showDetail);