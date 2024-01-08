let panel = document.querySelectorAll(".block");
// panel = Array.from(panel);

function show_hide_image(eventObj)
{
	panel.forEach(function (elem)
	{elem.classList.remove("clicked");});
	eventObj.target.classList.toggle("clicked");
}

function show_text(eventObject)
{
	let transition = eventObject.propertyName;
	if(transition.includes("flex"))
	{
		// eventObject.target.firstChildElement.classList.toggle("opened");
		let first = eventObject.target.firstElementChild;
		let last = eventObject.target.lastElementChild;
		first.classList.toggle("opened");
		last.classList.toggle("opened");

	}
}


panel.forEach(function (element)
{element.addEventListener("click", show_hide_image);
element.addEventListener("transitionend", show_text);});


