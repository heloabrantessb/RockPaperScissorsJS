let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    const options = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random() * options.length)
    console.log(options[random])
}

function getHumanChoice(){
    const humanOption = prompt("Choose your option: Rock, Paper or Scissor")
    return humanOption.toLowerCase();
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log("It's a tie");
    }else{
        if (humanChoice === "rock" && computerChoice === "scissor" 
        || humanChoice === "paper" && computerChoice === "rock"
        || humanChoice === "scissor" && computerChoice === "paper") {
            console.log("You win!");
            humanScore++;
        }else{
            console.log("The computer wins!");
            computerScore++
        }
    }
}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();


playRound(getHumanChoice(), getComputerChoice())