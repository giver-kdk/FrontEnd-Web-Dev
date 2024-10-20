"use strict";
// Typecript supports data types such as string, number, boolean, tuples, arrays, enums, any, object, void, never, etc. 
// ***** String Data Type *****
let firstName; // Specify variable datatype with ':'
// firstName = 12;						// Not allowed to assign other data type values
firstName = "Ram";
let lastName = "KC"; // Now, the variable is string forever
console.log("String Value: " + firstName + lastName);
// ***** Number *****
let age;
age = 21;
console.log("Number Value: " + age);
// ***** Boolean *****
let isValid;
isValid = true;
console.log("Boolean Value: " + isValid);
// ***** Arrays *****
let people; // String Array with fixed type 
people = ["Ram", "Shyam", "Hari"];
console.log("String Array: " + people);
let numbers; // Number Array with fixed type
numbers = [1, 2, 3, 4, 5];
console.log("Number Array: " + numbers);
// ***** Tuples *****
// Difference between Arrays and Tuples is that tuples has fixed size and pre-defined element data types unlike arrays
let tupleData; // This tuple should have the elements of sepecfied data types
tupleData = ["Ram KC", 21, true];
// Tuples can be used to fetch data of specific types
console.log("User Data as Tuple: " + tupleData);
// ***** Generic Arrays *****
let a1; // It is same as string[]
a1 = ["Ram", "Shyam"];
console.log("Generic Array: " + a1);
// ***** Enum *****
// Using 'enum' keyword is only supported in TypeScript
var Colors;
(function (Colors) {
    Colors[Colors["RED"] = 0] = "RED";
    Colors[Colors["BLUE"] = 1] = "BLUE";
    Colors[Colors["GREEN"] = 2] = "GREEN";
})(Colors || (Colors = {}));
;
const Car = Colors.RED; // It is memory efficient to use 'const' for Enum variables
console.log("Enum Data: " + Car);
// ***** Any *****
let data; // This variable is of multiple data types and can be re-type casted
data = "Hari";
console.log("Data as string: " + data);
data = 21;
console.log("Data as number: " + data);
data = true;
console.log("Data as boolean: " + data);
// ***** Object Type *****
let student;
student = {
    sid: 1,
    name: "Shyam Shrestha",
    address: "Kathmandu"
};
console.log("Object Data: " + student.sid);
console.log("Object Data: " + student.name);
console.log("Object Data: " + student.address);
// Optional Object Property
let employee; // Here, '?' makes 'age' optional
employee = {
    emp_id: 1234,
    name: "Alex KC",
    salary: 900000
};
console.log("Optional Property Object Data: " + employee.emp_id);
console.log("Optional Property Object Data: " + employee.name);
console.log("Optional Property Object Data: " + employee.salary);
