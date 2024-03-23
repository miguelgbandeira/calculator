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

// Function to handle key press events
function handleKeyPress(key) {
  // Check if the pressed key is a number
  if (!isNaN(parseInt(key))) {
    if (number2 === "" && operator === "") {
      number1 += key;
      display.textContent = number1;
    } else if (number1 !== "" && operator !== "") {
      number2 += key;
      display.textContent = number2;
    }
  } else if (["+", "-", "x", "/"].includes(key)) {
    if (operator === "") {
      operator = key;
      display.textContent = operator;
    } else {
      equalFunction();
      operator = key;
    }
  } else if (key == "=" || key == "Enter") {
    equalFunction();
  } else if (key == "Escape") {
    reset();
  }
}

// Event listener for keyboard keydown events
document.addEventListener("keydown", (e) => {
  // Check if the pressed key is alphanumeric, an operator, or Enter key
  if (
    (e.key >= "0" && e.key <= "9") ||
    ["+", "-", "x", "/", "Enter", "=", "Escape"].includes(e.key)
  ) {
    handleKeyPress(e.key);
  } else {
    // Display a warning message for invalid keys
    alert("Invalid key pressed. Please press a valid key.");
  }
});

// Event listener for button clicks (assuming you have an array of buttons named displayButtons)
displayButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("number")) {
      if (number2 === "" && operator === "") {
        number1 += button.textContent;
        display.textContent = number1;
      } else if (number1 !== "" && operator !== "") {
        number2 += button.textContent;
        display.textContent = number2;
      }
    } else if (button.classList.contains("operator")) {
      if (operator === "") {
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
  reset()();
});

function reset() {
  display.textContent = "";
  number1 = "";
  number2 = "";
  operator = "";
}

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
