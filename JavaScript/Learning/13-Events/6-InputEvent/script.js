function showInfo()
{
	// We require the value of the input field
	userName = document.getElementById("input1").value;
	element1 = document.getElementById("input2");
	selectedValue = element1.value;
	// Here, we need to find the text of the selected option. So, 'element.selectedIndex' returns the index of selected option 
	selectedText = document.getElementById("input2").options[element1.selectedIndex].text;

	element2 = document.getElementById("screen");
	element2.innerHTML = `${userName} selected ${selectedText} car with value ${selectedValue}`;
}

// We can use event listener method as well. For that remove 'on' from the event name
// element = document.getElementById("input2");
// element.addEventListener("change", showInfo);