const numberButtons = document.querySelectorAll(".number_button");
const operationButtons = document.querySelectorAll(".operation_button");
const equalsButton = document.getElementById("equals");
const clearButton = document.getElementById("all_clear");
const resultDisplay = document.getElementById("result_display");
const delButton = document.getElementById("del");
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

clearButton.addEventListener("click", clear);

delButton.addEventListener("click", deleteLastCharacter);

document.addEventListener("keyup", keyboardHandler);

// -----------------------keyboard handler -----------------------

function keyboardHandler(e){

  console.log(e.key);

  const releasedKey = e.key;

  switch(releasedKey){
    case "1": 
      populate("1");
      break;
    case "2":
      populate("2");
      break;
    case "3":
      populate("3");
      break;
    case "4":
      populate("4");
      break;
    case "5": 
      populate("5");
      break;
    case "6":
      populate("6");
      break;
    case "7":
      populate("7");
      break;
    case "8":
      populate("8");
      break;
    case "9":
      populate("9");
      break;
    case "Delete":
    case "Backspace":
      deleteLastCharacter();
      break;
    case "+":
      setOperation("+");
      break;
    case "-":
      setOperation("-");
      break;
    case "*":
      setOperation("*");
      break;
    case "/":
      setOperation("/");
      break;
    case "Enter":
    case "=":
      evaluate();
    default:
      break;
  }
}

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
  if (resultDisplay.value === "0" || shouldResetDisplay) resetDisplay();
  resultDisplay.value += value;
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
  if (currentOperation === null || shouldResetDisplay) return;
  secondNumber = resultDisplay.value;
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
