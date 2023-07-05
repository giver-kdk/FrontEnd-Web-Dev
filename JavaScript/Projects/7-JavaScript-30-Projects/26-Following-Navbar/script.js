let navbar = document.querySelector(".navbar");
let dropdownBox = document.querySelector(".dropdown_box");
let navList = document.querySelector(".nav_list");
let navItem = document.querySelectorAll(".nav_item");

function handleEnter()
{
	console.log("Entered");
	let content = this.querySelector(".item_content");
	content.classList.add("found");
	dropdownBox.classList.add("active");
	let contentCoord = content.getBoundingClientRect();
	let navCoord = navList.getBoundingClientRect();
	let BGcoord = {
		width: contentCoord.width,
		height: contentCoord.height,
		// Subtract actual navbar top value to get correct offset
		top: contentCoord.top - navCoord.top,
		left: contentCoord.left
	};
	setTimeout(() => 
	{
		if(content.classList.contains("found"))
		{
			content.classList.add("active");
		}
	}, 150);
	console.log(contentCoord);
	dropdownBox.style.setProperty("width", `${BGcoord.width}px`);
	dropdownBox.style.setProperty("height", `${BGcoord.height}px`);
	dropdownBox.style.setProperty("transform", `translate(${BGcoord.left}px, ${BGcoord.top - 10}px)`);
}



function handleLeave()
{
	let content = this.querySelector(".item_content");
	console.log("Leave");
	content.classList.remove("found");
	content.classList.remove("active");
	dropdownBox.classList.remove("active");
}





navItem.forEach(item => item.addEventListener("mouseenter", handleEnter));
navItem.forEach(item => item.addEventListener("mouseleave", handleLeave));

