const displayButtons = document.querySelectorAll(
  "button:not(#clear):not(.equal)"
);

const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector("#clear");

const display = document.querySelector(".display");
let displayValue = "";

displayButtons.forEach((button) => {
  button.addEventListener("click", () => {
    display.textContent = "";
    displayValue += button.textContent;
    display.textContent = button.textContent;
    console.log(displayValue);
  });
});

equalButton.addEventListener("click", () => {
  const [n1, operator, n2] = displayValue.split(/([+\-x/])/);
  const number1 = parseFloat(n1);
  const number2 = parseFloat(n2);
  display.textContent = operate(operator, number1, number2);
});

clearButton.addEventListener("click", () => {
  display.textContent = "";
  displayValue = "";
});

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, firstNumber, secondNumber) {
  if (operator == "+") {
    return add(firstNumber, secondNumber);
  } else if (operator == "-") {
    return subtract(firstNumber, secondNumber);
  } else if (operator == "x") {
    return multiply(firstNumber, secondNumber);
  } else if (operator == "/") {
    return divide(firstNumber, secondNumber);
  }
}

console.log(operate("+", 2, 10));
