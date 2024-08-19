const number_buttons = document.querySelectorAll(".number_button");
const numbers_array = [...number_buttons];
console.log(numbers_array);
// multiplication function
function multiply(first_num, second_num) {
  return first_num * second_num;
}

// suntraction function
function subtract(first_num, second_num) {
  return first_num - second_num;
}

// population function
let displayValue = "";

function populate(value) {
  displayValue += value;
  document.getElementById("result_display").value = displayValue;
}

numbers_array.forEach((button) => {
  button.addEventListener("click", () => {
    populate(button.textContent.trim());
  });
});
