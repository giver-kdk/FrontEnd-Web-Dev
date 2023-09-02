/*
Generate random color in HEx Format
*/
function generateRandomColor()
{
	// 16777215(Decimal) = FFFFFF(Hexadecimal)
	let hex = Math.floor(Math.random() * 16777215).toString(16);
	// Reserve 6 character space and fill empty space with 0
	hex = hex.padStart(6, '0');
	return ('#' + hex);
}
