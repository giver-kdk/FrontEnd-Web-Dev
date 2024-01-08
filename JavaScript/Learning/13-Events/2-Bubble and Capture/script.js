let element1 = document.getElementById("container1");
let element2 = document.getElementById("box1");

let element3 = document.getElementById("container2");
let element4 = document.getElementById("box2");

// Bubble Method(Default)
// Here, the inner element's event response will occur first, then outer
// Here, "capture: false" is same as "element2" event listener
// And, "once: false" only allows event listener to run once throughout the program
element1.addEventListener("click", printOuter, {capture: false, once: false});
element2.addEventListener("click", printInner, false);

// Capture Method(useCapture)
// Here, the outer element's event response will occur first, then inner
element3.addEventListener("click", printOuter, {capture: true});
element4.addEventListener("click", printInner, true);

function printOuter()
{
	alert("You clicked on outer box");
}

function printInner(eventObj)
{
	alert("You clicked on inner box");
	// eventObj.stopPropagation();			// Use this, if you want to handle event of child only
}