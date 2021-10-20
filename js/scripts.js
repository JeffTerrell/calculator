function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

// const number1 = parseInt(prompt("Enter a number:"));
// const number2 = parseInt(prompt("Enter another number:"));
// const result = multiply(number1, number2);
// alert(result);

const temp1 = parseInt(prompt("Choose a temp in celsius"));
const temp2 = parseInt(prompt("Choose a temp in farenheit"));

function tempconvertctof(number1) {
  return (number1 * 9/5) + 32
}

function tempconvertftoc(number1) {
  return (number1 - 32) * 5/9
}

const temp3 = tempconvertctof(temp1);
const temp4 = tempconvertftoc(temp2);

function displaytempconversion(number1, number2, number3, number4) {
  return number1 + "C becomes " + number2 + "F and " + number3 + "F becomes " + number4 + "C"
}

alert(displaytempconversion(temp1,temp3,temp2,temp4));

