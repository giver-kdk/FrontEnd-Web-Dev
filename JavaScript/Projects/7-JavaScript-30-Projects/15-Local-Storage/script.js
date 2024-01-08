// Variable Definitions
let addBtn = document.getElementById("add");
let foods = document.querySelector(".foods");
let order = document.querySelector(".order__food");
let del = document.getElementById("delete");
let selectAll = document.getElementById("select__all");
let unSelectAll = document.getElementById("unselect__all");
let items = [];

// Function Definition
function fill_list(items) 
{
	let result = items.map((food, index) => {

		let content = (`
		<li>
		<input type="checkbox" id="dish${index}" data-index="${index}" ${(food.select) ? "checked" : ""}>
		<label for="dish${index}" id="label${index}">${food.item}</label>
		</li>`);
		return content;
	});
	foods.innerHTML = result.join("");
}
function set_sign() 
{
	for (let i = 0; i < items.length; i++) 
	{
		let inputElement = document.querySelector(`.foods input[id="dish${i}"]`);
		let check_sign = document.querySelector(`.foods label[id="label${i}"]`);
		if (inputElement.checked) check_sign.classList.add("selected");
		else check_sign.classList.remove("selected");
	}
}
// Refill the list from memory with checked status
function update_list() 
{
	for (let i = 0; i < localStorage.length; i++) 
	{
		let status;
		// Converting string representation into actual boolean 
		if (localStorage.getItem(localStorage.key(i)) == "true") status = true;
		else status = false;
		items.push(
			{
				item: localStorage.key(i),
				select: status
			}
		);
	}
	fill_list(items);
	set_sign();
}

function add_items(e) 
{
	e.preventDefault();
	let content = document.getElementById("khaana").value;
	items.push(
		{
			item: content,
			select: false
		}
	);
	localStorage.setItem(content, "false");
	fill_list(items);
	set_sign();

	this.reset();
}
function toggle_check(e) 
{
	if (!e.target.matches("input")) return;
	let check_sign = document.querySelector(`.foods label[id="label${e.target.dataset.index}"]`);

	if (e.target.checked)
	{
		items[e.target.dataset.index].select = true;
		localStorage.setItem(check_sign.innerHTML, "true");
	} 
	else
	{
		items[e.target.dataset.index].select = false;
		localStorage.setItem(check_sign.innerHTML, "false");
	}
	set_sign();
}
function delete_all()
{
	items = [];
	localStorage.clear();
	foods.innerHTML = "";
}
function select_all()
{
	for (let i = 0; i < items.length; i++) 
	{
		let inputElement = document.querySelector(`.foods input[id="dish${i}"]`);
		let check_sign = document.querySelector(`.foods label[id="label${i}"]`);
		inputElement.checked = true;
		localStorage.setItem(check_sign.innerHTML, "true");
	}
	set_sign();
}
function unselect_all()
{
	for (let i = 0; i < items.length; i++) 
	{
		let inputElement = document.querySelector(`.foods input[id="dish${i}"]`);
		let check_sign = document.querySelector(`.foods label[id="label${i}"]`);
		inputElement.checked = false;
		localStorage.setItem(check_sign.innerHTML, "false");
	}
	set_sign();
}
function main()
{
	// Main Driver Code
	update_list();
	order.addEventListener("submit", add_items);
	foods.addEventListener("click", toggle_check);
	del.addEventListener("click", delete_all);
	selectAll.addEventListener("click", select_all);
	unSelectAll.addEventListener("click", unselect_all);
}
main();
// localStorage.clear();