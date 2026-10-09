console.log("rock paper scissors game");
let numOfGames = prompt("enter the number of games you want to play");
let computerScore = 0;
let userScore = 0;
for (let i = 1; i <= numOfGames; i++) {
  let userinput = prompt("enter your choice rock, paper, scissors");
  let computerinput = Math.floor(Math.random() * 3);

  if (
    (userinput == "rock" && computerinput == 0) ||
    (userinput == "paper" && computerinput == 1) ||
    (userinput == "scissors" && computerinput == 2)
  ) {
    console.log("its a tie");
  } else if (
    (userinput == "rock" && computerinput == 1) ||
    (userinput == "paper" && computerinput == 2) ||
    (userinput == "scissors" && computerinput == 0)
  ) {
    console.log("computer wins");
    computerScore++;
  } else if (
    (userinput == "rock" && computerinput == 2) ||
    (userinput == "paper" && computerinput == 0) ||
    (userinput == "scissors" && computerinput == 1)
  ) {
    console.log("user wins");
    userScore++;
  } else {
    console.log("invalid input");
  }
}
console.log(
  `user score is ${userScore} and computer score is ${computerScore}`,
);
