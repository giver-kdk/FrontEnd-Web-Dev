// "use strict" is a directive written at top of the code in strict mode
// In this mode, the program becomes syntatically strict


// Before strict mode
b = 3;
console.log(b);			// We can skip the declaration keywords above "use strict"

"use strict";

// After strict mode
let a = 2;
// c = 3;				// We can't skip 'let', 'const' or 'var' in strict mode
// console.log(c);


console.log(b);			// We can still access above variable  here inside "use strict"