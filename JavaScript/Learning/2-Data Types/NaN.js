// Program to demonstrate use of NaN(Not a Number)
let age = 123;
let stringAge = "123";
let myName = "Giver";
let a = NaN;			// This means 'a' is not a number
console.log(a);

// Check is NaN or not
console.log("Checking isNan() and Number.isNan()");
// 'isNan' checks if 'a' is number or not. Since 'a' is not a number. So, True
console.log(isNaN(a));
// 'Number.isNan()' checks  if value of 'a' = NaN, or not. Since 'a' = NaN. So, True
console.log(Number.isNaN(a));
// 'isNan' checks if 'age' is number or not. Since 'age' is a number. So, False
console.log(isNaN(age));
// 'Number.isNan()' checks  if value of 'age' = NaN, or not. Since 'age' != NaN. So, False
console.log(Number.isNaN(age));
// 'isNan' checks if 'stringAge' is number or not. Since 'stringAge' is a number anyhow. So, False
console.log(isNaN(stringAge));
// 'Number.isNan()' checks  if value of 'stringAge' = NaN, or not. Since 'stringAge' != NaN. So, False
console.log(Number.isNaN(stringAge));
// 'isNan' checks if 'myName' is number or not. Since 'myName' is not a number. So, True
console.log(isNaN(myName));
// 'Number.isNan()' checks  if value of 'myName' = NaN, or not. Since 'myName' != NaN. So, False
console.log(Number.isNaN(myName));

// Checking number or not using if-else
if(isNaN(stringAge))				// If 'stringAge' is not a number then do this
{
	console.log("This is not a number");
}
else
{
	console.log("This is a number");
}


// One Non-Number is not needed to be equal to another Non-Number
console.log(NaN === NaN);				// False
// Number.NaN is equivalent to NaN. So, similar to NaN === NaN
console.log(Number.NaN === NaN);		// False
// NaN is Not a Number. So, thats true
console.log(isNaN(NaN));				// True
// Number.NaN is equivalent to NaN
console.log(isNaN(Number.NaN));			// True


let x = 2;
let y = "2";
console.log(x == y);
console.log(x === y);