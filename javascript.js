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

let numOne = "", numTwo = "", operation = "", solution = "", flag = false;

let displayValue = document.querySelector("#display");
let num = document.querySelectorAll(".number");
let operator = document.querySelectorAll(".operator");

num.forEach((i) => i.addEventListener("click", (event) => {
    if (displayValue.textContent === "+" || displayValue.textContent === "-" || displayValue.textContent === "*" || displayValue.textContent === "/" || flag) {
        displayValue.textContent = "";
        flag = false;
    }
    if (displayValue.textContent.includes("Press")) {
        numOne = "";
        numTwo = "";
        operation = "";
        solution = "";
        displayValue.textContent = "";
    }
    else if (parseInt(i.textContent) === 0 && operation === "/") {
        displayValue.textContent = "Nice Try | Press anything to reset";
    }
    else if (numTwo === "" && operation === "") {
        numOne += i.textContent;
        displayValue.textContent += i.textContent;
    }
    else if (numOne !== "" && operation !== "") {
        numTwo += i.textContent;
        displayValue.textContent += i.textContent;
    }
}));

operator.forEach((i) => i.addEventListener("click", (event) => {
    if (displayValue.textContent.includes("Press")) {
        numOne = "";
        numTwo = "";
        operation = "";
        solution = "";
        displayValue.textContent = "";
    }
    else if (i.textContent === "=" && (numOne === "" || numTwo === "" || operation === "")) {
        displayValue.textContent = "Please enter a valid expression | Press anything to reset";
    }
    else if (i.textContent === "C") {
        numOne = "";
        numTwo = "";
        operation = "";
        solution = "";
        displayValue.textContent = "";
    }
    else if (i.textContent === "=") {
        solution = operate(parseInt(numOne), parseInt(numTwo), operation);
        displayValue.textContent = solution;
        numOne = solution;
        numTwo = "";
        operation = "";
    }
    else if (numOne !== "" && numTwo === "" && operation === "") {
        operation = i.textContent;
        displayValue.textContent = i.textContent;
    }
    else if (operation !== "" && numOne !== "" && numTwo !== "" ) {
        solution = operate(parseInt(numOne), parseInt(numTwo), operation);
        displayValue.textContent = solution;
        numOne = solution;
        numTwo = "";
        operation = i.textContent;
        flag = true;
    }
}));

