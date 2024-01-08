// Select all input elements
let input = document.querySelectorAll("input");

// Add event listener for each of the input elements
input.forEach((element) => 
{
	element.addEventListener("change", update_change);					// Event fire on input change
	element.addEventListener("mousemove", update_change);				// Event fire on mouse movent around input element
});

function update_change(eventObj)
{
	let object = eventObj.target;										// Targeted input element that fired the event
	let root = document.documentElement;								// Returns HTML document (root)
	let unit = "px";
	if(object.type == "color")											// If input type is 'color', then we don't use 'px'
	{unit = "";}
	// Set/Modify root property(css variables) using setProperty()
	root.style.setProperty(`--${object.id}`, `${object.value}${unit}`);	// Object id and css variabel name are made same for ease
}