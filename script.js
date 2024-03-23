const displayButtons = document.querySelectorAll(
  "button:not(#clear):not(.equal)"
);

const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector("#clear");

const display = document.querySelector(".display");
let number1 = "";
let number2 = "";
let operator = "";

displayButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.className == "number") {
      if (number2 == "" && operator == "") {
        number1 += button.textContent;
        display.textContent = number1;
      } else if (number1 != "" && operator != "") {
        number2 += button.textContent;
        display.textContent = number2;
      }
    } else if (button.className == "operator") {
      if (operator == "") {
        operator = button.textContent;
        display.textContent = operator;
      } else {
        equalFunction();
        operator = button.textContent;
      }
    }
  });
});

equalButton.addEventListener("click", () => {
  equalFunction();
});

clearButton.addEventListener("click", () => {
  display.textContent = "";
  number1 = "";
  number2 = "";
  operator = "";
});

function equalFunction() {
  display.textContent = operate(
    operator,
    parseFloat(number1),
    parseFloat(number2)
  );
  number1 = display.textContent;
  operator = "";
  number2 = "";
}

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
