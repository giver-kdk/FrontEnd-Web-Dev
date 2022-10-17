const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
let bandList = document.querySelector("#bands");

// Here, we need to sort the array alphabetically by removing articles like "the", "oh", "an", etc.
function cleanup(string)
{
	return string.replace(/^(the |a |an |oh )/gi, "");
}
function compare(a, b)
{
	return (cleanup(a) > cleanup(b) ? 1 : -1);
}
bands.sort(compare);
bandList.innerHTML = bands.map(band =>
{
	return `<li>${band}</li>`;
}).join("");