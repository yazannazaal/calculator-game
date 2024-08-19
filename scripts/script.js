const number_buttons = document.querySelectorAll(".number_button");
const numbers_array = [...number_buttons];
const divid_op = document.querySelector('#divide');
const multiply_op = document.querySelector('#multiply')
const sub_op = document.querySelector('#subtract')
const add_op = document.querySelector('#add')
const equals_op = document.querySelector('#equals')
const result_display = document.getElementById("result_display")

// multiplication function
const multiply = function (num1, num2) {
  let result = num1 * num2
  return result;
}
// suntraction function
const subtract = function (num1, num2) {
  let result = num1 - num2
  return result;
}
//addtion function
const add = function (num1, num2) {
  let result = num1 + num2;
  return result
}
//division function
const div = function (num1, num2) {
  let result = num1 / num2;
  return result
}
const oprate = function (num1, num2, op) {
  if (op === add_op) {
    return add(num1, num2);
  } else if (op === divid_op) {
    return div(num1, num2);
  } else if (op === sub_op) {
    return subtract(num1, num2);
  } else if (op === multiply_op) {
    return multiply(num1, num2);
  }
}
// population function
let displayValue = "";

function populate(value) {
  displayValue += value;
  result_display.value = displayValue;
}



numbers_array.forEach((button) => {
  button.addEventListener("click", () => {
    populate(button.textContent.trim());
  });
});


// added this comment here as an example of how to do this with one event handler;

// document.addEventListener("click", (e) => {
//   const clicked_element = e.target;

//   if (clicked_element.dataset.button_type === "number") {
//     populate(clicked_element.textContent.trim());
//   }
//   if (clicked_element.dataset.type === "dot") {
//     //logic for handling the situation where when this is clicked we get the value with the dot at the end
//     //which doesn't immediately show in the display and for handling multiple dot presses
//   }
// });