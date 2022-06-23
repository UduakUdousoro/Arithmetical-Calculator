let a = parseInt(window.prompt("Enter First Number"))
let b = parseInt(window.prompt("Enter Second Number"))
let operation = window.prompt(`Pick an operation: "+", "-", "*", "/"`)

let add = a + b;
let subtract = a - b;
let divide = a / b;
let multiply = a * b;

if (operation == "+"){
    alert(add);
}else if(operation == "-"){
    alert(subtract);
}else if(operation == "/"){
    alert(divide);
}else if(operation == "*"){
    alert(multiply);
}else {
    alert("Try Again.")
}









// let a, b, operation;

// operation
// alert("Enter a function")
// a = parseInt(prompt("Enter first number"));
// b = parseInt(prompt("Enter second number"));
// z = a + b;
// x = a - b
// y = a / b
// c = a * b 
// alert(z)


