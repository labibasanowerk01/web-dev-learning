// Faulty Calculator
// It has a 10% chance of giving wrong answers

let a = 8;
let b = 10;
if (Math.random() < 0.1) {
function sum(a, b) {
    return a - b;
}
console.log("Sum of a and b is: " + sum(a, b));

function sub(a, b) {
    return a / b;
}
console.log("Subtraction of a and b is: " + sub(a, b));

function mul(a, b) {
    return a + b;
}
console.log("Multiplication of a and b is: " + mul(a, b));

function div(a, b) {
    return a ** b;
}
console.log("Division of a and b is: " + div(a, b));
}

else {
    function sum(a, b) {
    return a + b;
}
    console.log("Sum of a and b is: " + sum(a, b));

function sub(a, b) {
    return a - b;
}
console.log("Subtraction of a and b is: " + sub(a, b));

function mul(a, b) {
    return a * b;
}
console.log("Multiplication of a and b is: " + mul(a, b));

function div(a, b) {
    return a / b;
}
console.log("Division of a and b is: " + div(a, b));

}