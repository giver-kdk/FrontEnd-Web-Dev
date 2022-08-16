// 'getElementById("id")' returns HTML element of given 'id'
// It returns 'null' on failure
let  element1 = document.getElementById("box");
console.log(element1);




// 'getElementsByClassName("class")' returns collection of HTML elements of given 'class'
// It returns 'Empty HTML collection' on failure
// Each elements can be accessed like array elements using []
let  element2 = document.getElementsByClassName("container");
console.log(element2);

for(let i = 0; i < element2.length; i++)		// For HTML collection, we can use 'length' property
{
	console.log(element2[i]);
}




// 'getElementsByTagName("tag")' returns collection of HTML elements of given 'tag'
// Returns 'Empty HTML collection' on failure
let  element3 = document.getElementsByTagName("div");
console.log(element3);

for(let i = 0; i < element3.length; i++)		
{
	console.log(element3[i]);
}




// 'getElementsByName("name")' returns Node List of given 'name' attribute
// Returns 'Empty Node List' on failure
let  element4 = document.getElementsByName("gender");
console.log(element4);

for(let i = 0; i < element4.length; i++)		// For Node List, we can use 'length' property
{
	console.log(element4[i]);
}




// 'querySelector("selector")' returns first occured HTML element of given 'selector' attribute
// 'selector' is used just like in CSS
// Returns 'null' on failure
let  element5 = document.querySelector("#box");
let  element6 = document.querySelector(".container");	// Here, only 1st found element of given 'class' is returned
let  element7 = document.querySelector("div");			// Here, only 1st found element of given 'tag' is returned
console.log(element5);
console.log(element6);
console.log(element7);




// 'querySelectorAll("selector")' returns Node List of all occurrence of given 'selector' 
// Returns 'Empty Node List' on failure
let  element8 = document.querySelectorAll(".container");
console.log(element8);

for(let i = 0; i < element8.length; i++)	
{
	console.log(element8[i]);
}


