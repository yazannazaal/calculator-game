const numberButtons = document.querySelectorAll(".number_button");
const operationButtons = document.querySelectorAll(".operation_button");
const equalsButton = document.getElementById("equals");
const clearButton = document.getElementById("all_clear");
const resultDisplay = document.getElementById("result_display");
const delButton = document.getElementById("del");
const dot = document.getElementById("n.");
let firstNumber = "";
let secondNumber = "";
let currentOperation = null;
let shouldResetDisplay = false;

// ----------------------------events handling-------------------------------------

numberButtons.forEach((button) => {
  button.addEventListener("click", () => populate(button.textContent.trim()));
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () =>
    setOperation(button.textContent.trim())
  );
});

equalsButton.addEventListener("click", evaluate);
dot.addEventListener("click", evaluate);

clearButton.addEventListener("click", clear);

delButton.addEventListener("click", deleteLastCharacter);

// -----------------------arithmatic operations-------------------

const multiply = (num1, num2) => num1 * num2;

const subtract = (num1, num2) => num1 - num2;

const add = (num1, num2) => num1 + num2;

const divide = (num1, num2) => (num2 === 0 ? "Error" : num1 / num2);

const operate = (operator, num1, num2) => {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return null;
  }
};

function populate(value) {
  // Check if the user is trying to add a second decimal point
  if (value === "." && resultDisplay.value.includes(".")) return;

  // If the display is '0' or needs resetting, reset it
  if (resultDisplay.value === "0" || shouldResetDisplay) resetDisplay();

  // If the user starts with a dot, prepend a '0'
  if (value === "." && resultDisplay.value === "") {
    resultDisplay.value = "0."; // Automatically add '0' before the dot
  
  } else {
    // Append the value normally
    resultDisplay.value += value;
  }
}


function resetDisplay() {
  resultDisplay.value = "";
  shouldResetDisplay = false;
}

function setOperation(operation) {
  if (currentOperation !== null) evaluate();
  firstNumber = resultDisplay.value;
  currentOperation = operation;
  shouldResetDisplay = true;
}

function evaluate() {
  // Check if an operator is selected and both numbers are provided
  if (currentOperation === null || shouldResetDisplay || firstNumber === "") return;
  secondNumber = resultDisplay.value;
  // If no second number is provided, exit the function
  if(secondNumber === "") return;
  resultDisplay.value = operate(
    currentOperation,
    parseFloat(firstNumber),
    parseFloat(secondNumber)
  );
  currentOperation = null;
}

function clear() {
  resultDisplay.value = "0";
  firstNumber = "";
  secondNumber = "";
  currentOperation = null;
}

function deleteLastCharacter() {
  const currentValue = resultDisplay.value;

  if (currentValue.length > 0) {
    resultDisplay.value = currentValue.slice(0, -1);
  }
}
