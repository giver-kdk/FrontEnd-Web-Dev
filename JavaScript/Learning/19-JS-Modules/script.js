// Named Import should be done using {}
// The name inside {} should be exactly same as their name in the module file
import {name, age, object, array} from "./variables.js"
// Default Import name(sum) can be anything
import sum from "./addition.js"
// Named Import name can be changed by using "as"
import multiply, {sub as subtract, divide as division} from "./collection.js"


console.log();
console.log(name);
console.log(age);
console.log(object);
console.log(array);

console.log();
sum(5, 6);

multiply(12, 5);
subtract(10, 5);
division(500, 10);

