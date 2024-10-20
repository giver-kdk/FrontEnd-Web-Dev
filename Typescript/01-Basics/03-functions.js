"use strict";
// Specify sunftion return type by type name after function name 
function greet() {
    console.log("Hello World");
}
greet();
// Function with typed parameter
function sum(num1, num2) {
    return num1 + num2;
}
console.log("Sum is: " + sum(4, 5));
// Optional Function Parameters
// '?' makes the paramter optional
function multiply(num1, num2, num3) {
    let third_num = (num3 ? num3 : 1);
    return num1 * num2 * third_num;
}
console.log("Multiplication: " + multiply(3, 4));
// Default Parameter
function subtract(num1, num2, num3 = 0) {
    return num1 - num2 - num3;
}
console.log("Substraction: " + subtract(9, 5));
