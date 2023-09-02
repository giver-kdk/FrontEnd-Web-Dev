function encryptString(str) {
	// Increment each character code by 1
	const encrypted = str.replace(/[a-z]/gi, char =>
	String.fromCharCode(char.charCodeAt(0) + 1)
	);
	return encrypted;
}

function decryptString(str) {
	  // Decrement each character code by 1
	const decrypted = str.replace(/[a-z]/gi, char =>
	  String.fromCharCode(char.charCodeAt(0) - 1)
	);
	return decrypted;
  }
  
  const secretMessage = 'Hello World!';
  const encryptedMessage = encryptString(secretMessage);
  const decryptedMessage = decryptString(encryptedMessage);
  
  console.log(encryptedMessage); 
  console.log(decryptedMessage); 