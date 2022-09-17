const source = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let cities;
let element = document.querySelector(".found");
// Get the data from source into a variable
async function retrieve()
{
	let response = await fetch(source);
	let array = await response.json();
	cities = array;
}
retrieve();

let input = document.getElementById("search");
let searchResult = document.querySelector(".search__result");
input.addEventListener("keyup", find);
function find()
{
	let search = document.getElementById("search").value;
	// Clear result when input is empty
	if(search == "") searchResult.innerHTML = "";
	else
	{
		// regex to select pattern globally and case-insensitively
		let reg = new RegExp(search, "gi");
		// Get those array elements containing matched pattern
		let result = cities.filter((cityObj) =>
		{
			if(cityObj.city.match(reg) || cityObj.state.match(reg)) return true;
		});
		// Use array data to create HTML DOM
		// map() returns array of HTML string. So, join() converts them into single string
		let output = result.map((item) =>
		{
			// Apply Highlight class to matched pattern
			cityLight = item.city.replace(reg, `<span class="highlight">${reg.source}</span>`);
			stateLight = item.state.replace(reg, `<span class="highlight">${reg.source}</span>`);
			return `<div class="found">${cityLight},&nbsp&nbsp&nbsp&nbsp${stateLight},&nbsp&nbsp&nbsp&nbsp${item.population}</div>`;
		}).join("");
		searchResult.innerHTML = output;
	}
}

