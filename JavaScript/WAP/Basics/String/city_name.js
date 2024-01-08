// Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.
function show(city)
{
	if(city.toLowerCase().includes("new") || city.toLowerCase().includes("los"))
	{
		return city;
	}
	else
	{
		return "";
	}
}
console.log(show("New York"));
console.log(show("Los Angeles"));
console.log(show("Golden Street"));
console.log(show("West Bengals"));
console.log(show("New Street"));