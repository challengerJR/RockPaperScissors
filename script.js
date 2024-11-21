let humanChoice = 0;
let computerScore = 0;
let tie = 0;
let humanScore = 0;
let computerChoice;
let computerString;
let humanString;
let status = document.getElementById("status");


//makes random choice between three items
function getcomputerChoice(max){return Math.floor((Math.random() * max+1));
}

//button listeners for human choice
document.getElementById("rock").addEventListener("click", choose);
document.getElementById("paper").addEventListener("click", choose);
document.getElementById("scissors").addEventListener("click", choose);
document.getElementById("reset").addEventListener("click", reset);
//human choice, triggers full round
function choose()
{
    if (this.id == "rock") {humanChoice = 1; humanString = "rock"} else if (this.id == "paper") {humanChoice = 2; humanString = "paper"} else if (this.id == "scissors") {humanChoice = 3; humanString = "scissors"};

computerChoice = getcomputerChoice(3);
 console.log(computerChoice);
    if (computerChoice === 1) {computerString = "rock"} else if (computerChoice === 2) {computerString = "paper"} else if (computerChoice === 3) {computerString = "scissors"};
    playRound();
  return computerString;
}

//plays full round
function playRound(){
    whoWon();
    scoreKeeper();
}

//logs winner, increments score
function whoWon() 

{if (computerChoice == humanChoice) {console.log("It's a tie!");tie++}
else if ((computerChoice == 1 && humanChoice == 3) || (computerChoice == 2 && humanChoice == 1) || (computerChoice == 3 && humanChoice == 2)){console.log("Computer wins!");computerScore++;}
else if ((humanChoice == 1 && computerChoice == 3) || (humanChoice == 2 && computerChoice == 1) || (humanChoice == 3 && computerChoice == 2)) {console.log("Human wins!");humanScore++;}
}


//keeps score
function scoreKeeper(){
  status.innerText = "human choice is " + humanString + ", computer choice is " + computerString;
  
    document.getElementById("humanScore").innerText=humanScore;
    document.getElementById("computerScore").innerText=computerScore;
    document.getElementById("tie").innerText=tie;
 
if (humanScore === 5) {alert("Human wins! Start over?");reset();}
  else if (computerScore === 5) {alert("Computer wins! Start over?");reset();}
;
}

function reset(){
    humanScore = 0;
    computerScore = 0;
    tie = 0;
    scoreKeeper();
   document.getElementById("status").innerText="";
  
}