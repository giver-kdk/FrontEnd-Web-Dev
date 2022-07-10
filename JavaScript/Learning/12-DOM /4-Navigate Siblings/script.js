
// Access next sibling node(including free text)
// 'nextSibling' returns next sibling node
let siblingNode1 = document.body.firstElementChild.nextSibling;
console.log(siblingNode1);

// Access next sibling element(excluding free text)
// 'nextElementSibling' returns next sibling element
let siblingElement1 = document.body.firstElementChild.nextElementSibling;
console.log(siblingElement1);

// Access previous sibling node(including free text)
// 'previousSibling' returns previous sibling node
let siblingNode2 = document.body.lastElementChild.previousSibling;
console.log(siblingNode2);

// Access previous sibling element(excluding free text)
// 'previousElementSibling' returns previous sibling element
let siblingElement2 = document.body.lastElementChild.previousElementSibling;
console.log(siblingElement2);