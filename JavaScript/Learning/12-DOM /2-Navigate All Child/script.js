/*
We can access either child node or child element with document's property:
Child Node counts every separate content/text as node. For eg: It treats free text as a text node.
Child Element means accessing only HTML elements and content enclosed inside HTML tag. Here, free text is ignored.

Syntax:
	variable = document.elementName.property;
*/

// Access child nodes
let child = document.body.childNodes;
console.log(child);			// All children node list will be shown




// Access child elements
let childrenElement = document.body.children;
console.log(childrenElement);				// All children element list will be shown
// Since, there are multiple childrens. So, we can get their length too
// Individual element access is done using [] 
for(let i = 0; i < childrenElement.length; i++)
{
	console.log(childrenElement[i]);
}



// Check whether an element has child node or not (Including free text)
let hasChild = document.body.hasChildNodes();
// hasChildNodes() returns 'true' is there are child nodes else 'false'
console.log(hasChild);
if(hasChild)
{
	console.log("There is atleast one child");
}
else
{
	console.log("There are no children");
}




// Check whether an element has child element or not (Excluding free text)
let children1 = document.body.firstElementChild;
// 'firstElementChild' returns actual HTML element of first child element if exist, else returns 'null' falsy value
console.log(children1);
if(children1)
{
	console.log("There is atleast one child");
}
else
{
	console.log("There are no children");
}


