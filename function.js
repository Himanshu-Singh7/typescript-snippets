// 1 Write a function to add two numbers
function addNumber(x1, x2) {
    console.log(x1 + x2);
}
addNumber(10, 20);
// Function of return type number
function add(x1, x2) {
    return x1 + x2;
}
var x = add(10, 20);
console.log(x);
//Function of concatenation of strings and number
function addNum(x1, x2) {
    return x1 + x2;
}
var value = addNum("Hello", 20);
console.log(value);
// Function with without argument
function test() {
    console.log("Test Function");
}
test();
// 
function test1(x1, x2) {
    return x1 + ' ' + x2;
}
var t = test1("Hello", "World");
console.log(t);
// Function with Optional parameter
function test2(x1, x2) {
    console.log(x1);
    console.log(x2);
}
test2(10);
// Function with Default parameter
function applyDiscount(x1, x2) {
    if (x2 === void 0) { x2 = 100; }
    console.log(x1);
    console.log(x2);
}
applyDiscount(10, 1000);
var x1 = [10, 20, 30];
function addArray(x1) {
    for (var i = 0; i < x1.length; i++) {
        console.log(x1[i]);
    }
}
addArray(x1);
// Without making array
function test5() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    for (var i = 0; i < n.length; i++) {
        console.log(n[i]);
    }
}
test5(100, 200, 300, "Mike", 500);
function test6(i) {
    var n = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        n[_i - 1] = arguments[_i];
    }
    for (var j = 0; j < n.length; j++) {
        console.log(n[j]);
    }
    if (i != null) {
        console.log(i);
    }
}
test6("Hello", 100, 200, 300, 400, 500);
// Adavantages of Backtick
function test7(name, age) {
    console.log("Name is ".concat(name, " and age is ").concat(age));
}
test7('Mike', 20);
