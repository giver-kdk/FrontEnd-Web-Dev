// Program to convert a repeated data araay into single data array
let array = [1, 2, 3, 3, 2, 4, 4, 4, 5];
array = Array.from(new Set(array));
console.log(array);