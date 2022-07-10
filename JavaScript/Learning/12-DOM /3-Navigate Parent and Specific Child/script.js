// Access specific child of an element

// 'firstChild' returns first direct child node of element
let firstNode = document.body.firstChild;
console.log(firstNode);

// 'firstElementChild' returns first direct child element of element
let firstElement = document.body.firstElementChild;
console.log(firstElement);

// Accessing first grandchild(child-of-child) element
let secondElement = document.body.firstElementChild.firstElementChild;
console.log(secondElement);





// 'lastChild' returns last direct child node of element
let lastNode = document.body.lastChild;
console.log(lastNode);

// 'lastElementChild' returns last direct child element of element
let lastElement = document.body.lastElementChild;
console.log(lastElement);

// Accessing last grandchild node
let lastInnerNode = document.body.firstElementChild.lastChild;
console.log(lastInnerNode);

// Accessing last grandchild element
let lastInnerElement = document.body.firstElementChild.lastElementChild;
console.log(lastInnerElement);



// Accessing Parent of an element or node
// 'parentNode' returns direct parent node
let childNode = document.body.firstChild;
let parentNode = childNode.parentNode;
console.log(parentNode);			// Returns 'body'

// 'parentElement' returns direct parent element
let childElement = document.body.firstElementChild;
let parentElement = childElement.parentElement;
console.log(parentElement);			// Returns 'body'