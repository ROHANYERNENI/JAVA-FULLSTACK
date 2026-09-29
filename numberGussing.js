console.log("number guessing game");
const randomnumber = Math.floor(Math.random() * 100) + 1;
let userInput = 0;
let win = false;
for (let i = 0; i <= 10; i++) {
  userInput = prompt("enter your guess");
  if (userInput == randomnumber) {
    console.log("your guess is correct You Win");
    won = true;
    break;
  } else if (userInput > randomnumber) {
    console.log("your guess is higher");
  } else {
    console.log("your guess is lower");
  }
}
if (win == false) {
  console.log(`you lose the correct number is ${randomNumber}.`);
}
