function getComputerChoice() {
  const options = ["rock", "paper", "scissor"];
  const random = Math.floor(Math.random() * options.length);
  return(options[random]);
}

function getHumanChoice() {
  const humanOption = prompt("Choose your option: Rock, Paper or Scissor");
  return humanOption.toLowerCase();
}

function playGame() {
  let computerScore = 0;
  let humanScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("Draw!");
    } else {
      if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
      ) {
        console.log("You win!");
        humanScore++;
      } else {
        console.log("The computer wins!");
        computerScore++;
      }
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log("Computer's choice: " + computerSelection)
    playRound(humanSelection, computerSelection)
  }

  console.log(`Final Score - You: ${humanScore} Computer: ${computerScore}`);

  if(humanScore > computerScore)
    console.log("You won the game!");
  else
    console.log("The computer won the game!");
}

playGame();

