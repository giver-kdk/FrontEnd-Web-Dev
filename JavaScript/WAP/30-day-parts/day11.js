function generateRandomPassword(length) {
	const str1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';	// Capital Letters
	const str2 = 'abcdefghijklmnopqrstuvwxyz';	// Small Letter
	const str3 = '0123456789';					// Digits
	const chars = str1.concat(str2, str3);
	let password = '';

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * chars.length);
		password += chars.charAt(randomIndex);
	}

	return password;
}
// Output is randompassword of length 8
console.log(generateRandomPassword(8));
