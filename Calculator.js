console.log("CALCULATOR");
let number1 = 0;
let number2 = 0;
let action;
number1 = prompt("Enter the value of number 1");
number2 = prompt("Enter the value of number 2");
action = prompt("enter the operation to be done");
console.log(number1, number2, action);
switch (action) {
  case "+":
    console.log(number1 + number2);
    break;
  case "-":
    console.log(number1 - number2);
    break;
  case "*":
    console.log(number1 * number2);
    break;
  case "/":
    console.log(number1 / number2);
    break;
}
