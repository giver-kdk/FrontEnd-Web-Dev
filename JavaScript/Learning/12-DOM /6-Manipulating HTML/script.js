// Access and Modify Inner HTML
// 'innerHTML' returns inner HTML content as 'string'
// 'innerHTML' can be used to overwrite current HTML 
// NOTE: 'innerHTML' doesn't modify HTML of source code, but modifies for browser display
let  element1 = document.getElementById("box");

// For single element, directly use 'innerHTML' 
console.log(element1.innerHTML);
element1.innerHTML = "Hello Humans";
console.log(element1.innerHTML);



// For HTML collection or Node list, use 'innerHTML' with single element using []
let  element2 = document.getElementsByClassName("container");
for(let i = 0; i < element2.length; i++)
{
	element2[i].innerHTML = "Hello Aliens " + (i + 1); 
	console.log(element2[i].innerHTML);
}
// NOTE: Use similar method to access and modify inner HTML of elements obtained from other Element Searching Methods