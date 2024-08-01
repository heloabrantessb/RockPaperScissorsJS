function getComputerChoice() {
    const options = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random() * options.length)
    console.log(options[random])
}

function getHumanChoice(){
    const humanOption = prompt("Choose your option: Rock, Paper or Scissor")
    return humanOption;
}
// getComputerChoice()
// getHumanChoice()
