$(document).ready(() =>
{
	$.get("https://api.publicapis.org/entries", (res, status) =>
	{
		console.log(res);
		console.log(res.entries[0]);
		console.log(status);
	})

	// Here, this post method will not work cause the server deosn't give permission for this example
	let dataToSend = {name: "Giver", age: 19};
	$.post("https://api.publicapis.org/entries", dataToSend, (res, status) =>
	{
		console.log(res);
		console.log(status);
	});
});