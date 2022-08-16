// Normally, JS can't perform calculations for numbers greater than 9007199254740991
// So, 'bigint' allows to do that

let maxLimit = Number.MAX_SAFE_INTEGER;			// The maximum number upto which JS can normally calculate
console.log(maxLimit);

// Calculating further than max limit giver wrong results
console.log(maxLimit + 20);

// So, use 'n' as a suffix after every large number to convert it into BigInt
let bigNumber = 9007199254740991n;
console.log(typeof(bigNumber));
console.log(bigNumber);
// Now, we get correct results for large numbers
let bigResult = bigNumber + 2000n;
console.log(bigResult);