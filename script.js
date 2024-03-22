const displayButtons = document.querySelectorAll(
  "button:not(.clear):not(.equal)"
);

const equalButton = document.querySelector(".equal");

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
  console.log(operate(operator, number1, number2));
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
