/*
Using JS, style on element can be changed 
Syntax:
	document.element.style.property = "new property";
*/

let element1 = document.getElementById("box");
element1.style.color = "red";
element1.style.border = "2px solid blue";
element1.style.borderRadius = "5px";
element1.style.fontSize = "25px";

// Using style just like in CSS with setProperty() method
/*
Syntax:
	document.element.style.setProperty("property-name", "value");
*/
element1.style.setProperty("background-color", "palegreen");
// There are more style property support: https://www.w3schools.com/jsref/dom_obj_style.asp