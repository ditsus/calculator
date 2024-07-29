function add(numOne, numTwo) {
    return (numOne + numTwo);
}

function subtract(numOne, numTwo) {
    return (numOne - numTwo);
}

function multiply(numOne, numTwo) {
    return (numOne * numTwo);
}

function divide(numOne, numTwo) {
    return (numOne / numTwo);
}

function operate(numOne, numTwo, operator) {
    if (operator === "+") {
        return add(numOne, numTwo);
    }
    else if (operator === "-") {
        return subtract(numOne, numTwo);
    }
    else if (operator === "*") {
        return multiply(numOne, numTwo);
    }
    else if (operator === "/") {
        return divide(numOne, numTwo);
    }
}

let numOne = "", numTwo = "", operation = "", solution = "";

let displayValue = document.querySelector("#display");
let num = document.querySelectorAll(".number");
let operator = document.querySelectorAll(".operator");

num.forEach((i) => i.addEventListener("click", (event) => {
    if (solution != "") {
        solution = "";
        numOne = "";
        numTwo = "";
        operation = "";
        displayValue.textContent = "";
    }
    if (displayValue.textContent === "+" || displayValue.textContent === "-" || displayValue.textContent === "*" || displayValue.textContent === "/") {
        displayValue.textContent = "";
    }
    displayValue.textContent += i.textContent;
    if (operation !== "") {
        numTwo += i.textContent;
    }
    else {
        numOne += i.textContent;
    }
}));

operator.forEach((i) => i.addEventListener("click", (event) => {
    if (i.textContent === "=") {
        solution = operate(parseInt(numOne), parseInt(numTwo), operation);
        displayValue.textContent = solution;
    }
    else if (i.textContent === "C") {
        solution = "";
        numOne = "";
        numTwo = "";
        operation = "";
        displayValue.textContent = "";
    }
    else {
        operation = i.textContent;
        displayValue.textContent = i.textContent;
    }
}));